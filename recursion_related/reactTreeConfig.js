// Contains functions for generating a Treant config JSON object
const fs = require('fs');
const ReactTreeConfig = {};

ReactTreeConfig.preOrderSplit = (recursiveCallbackArray, numCalls) => {
    const root = recursiveCallbackArray.shift();
    let preOrderSplitArray = [];
    for (let i = 0; i < numCalls; i++) { preOrderSplitArray.push([]); }

    let counter = 0;
    for (let i = 0; i < recursiveCallbackArray.length; i++) {
        if (recursiveCallbackArray[i].parent == root.arg && preOrderSplitArray[counter].length) { counter++; }
        preOrderSplitArray[counter].push(recursiveCallbackArray[i]);
    }

    return preOrderSplitArray;
}


ReactTreeConfig.NodeStructMaker = (recursiveCallbackArray, numCalls) => {
    let {name, result, arg} = recursiveCallbackArray[0];
    if (result == arg && recursiveCallbackArray.length === 1) {
        return {
            "name": `${name}(${arg}) Result = ${result}`
        }
    }
    else {
        const splitArray = ReactTreeConfig.preOrderSplit(recursiveCallbackArray, numCalls);
        let childrenArray =[];
        for (let i = 0; i < numCalls; i++) {
            childrenArray.push(ReactTreeConfig.NodeStructMaker(splitArray[i], numCalls))
        }

        return {
            "name": `${name}(${arg}) Result = ${result}`,
            "children": [...childrenArray]
        }
    }
        
}



// let testArr = [ 
//     { name: 'fib3', parent: null, arg: 3, result: 2, pos: '' },
//     { name: 'fib2', parent: 3, arg: 2, result: 1, pos: '' },
//     { name: 'fib1', parent: 2, arg: 1, result: 1, pos: ''},
//     { name: 'fib0', parent: 2, arg: 0, result: 0, pos:'' },
//     { name: 'fib1', parent: 3, arg: 1, result: 1, pos: '' } 
// ];

// let testObj = ReactTreeConfig.NodeStructMaker(testArr, 2);
// console.log(testObj);
// fs.writeFileSync('./testReactTreeObj', JSON.stringify(testObj));

// let testArr = [
//         { name: 'factorial', parent: null, arg: 4, result: 55296 },
//         { name: 'factorial', parent: 4, arg: 3, result: 24 },
//         { name: 'factorial', parent: 3, arg: 2, result: 2 },
//         { name: 'factorial', parent: 2, arg: 1, result: 1 },
//         { name: 'factorial', parent: 2, arg: 0, result: 0 },
//         { name: 'factorial', parent: 2, arg: -1, result: -1 },
//         { name: 'factorial', parent: 3, arg: 1, result: 1 },
//         { name: 'factorial', parent: 3, arg: 0, result: 0 },
//         { name: 'factorial', parent: 4, arg: 2, result: 2 },
//         { name: 'factorial', parent: 2, arg: 1, result: 1 },
//         { name: 'factorial', parent: 2, arg: 0, result: 0 },
//         { name: 'factorial', parent: 2, arg: -1, result: -1 },
//         { name: 'factorial', parent: 4, arg: 1, result: 1 }
// ];

// let testObj = ReactTreeConfig.NodeStructMaker(testArr, 3);
// fs.writeFileSync('./testReactConf.json', JSON.stringify(testObj));

module.exports = ReactTreeConfig;
