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
    let {name, result, arg, pos} = recursiveCallbackArray[0];
    if (result == arg && recursiveCallbackArray.length === 1) {
        return {
            "name": `${name}(${arg}) Result = ${result}`
        }
    }
    else {
        if (pos == "Center") {
            recursiveCallbackArray.pop();
            return {
                "name": `${name}(${arg}) Result = ${result}`,
                "children": [
                    ReactTreeConfig.NodeStructMaker(recursiveCallbackArray, numCalls),
                ]
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

module.exports = ReactTreeConfig;
