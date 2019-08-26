// Contains functions for generating a Treant config JSON object

const TreantConfig = {};

TreantConfig.preOrderSplit = (recursiveCallbackArray) => {
    const root = recursiveCallbackArray.pop();
    let leftRightArrays = [[],[]];
    let counter = 0;
    for (let i = 0; i < recursiveCallbackArray.length; i++) {
        if (counter > 0) leftRightArrays[1].push(recursiveCallbackArray[i]);
        else {
            if (recursiveCallbackArray[i].parent == root.arg) { counter++; }
            leftRightArrays[0].push(recursiveCallbackArray[i]);
        }
    }
    leftRightArrays[0] = leftRightArrays[0]
    leftRightArrays[1] = leftRightArrays[1]
    return leftRightArrays;
}


TreantConfig.NodeStructMaker = (recursiveCallbackArray) => {
    let {func, value, arg, parent, pos} = recursiveCallbackArray[recursiveCallbackArray.length - 1];
    if (value == arg) {
        return {
            text: {
                name: `fibTree`,
                title: `fibTree(${arg})`,
                desc: `Result = ${value}, Parent = ${parent}`,
            }
        }
    }
    else {
        if (pos === "Center") {
            return {
                text: {
                    name: `fibTree`,
                    title: `fibTree(${arg})`,
                    desc: `Result = ${value}, Parent = ${parent}`
                },
                children: [
                    TreantConfig.NodeStructMaker(recursiveCallbackArray),
                ]
            }
        }
        else {
            const LRArr = TreantConfig.preOrderSplit(recursiveCallbackArray);
            return {
                text: {
                    name: `fibTree`,
                    title: `fibTree(${arg})`,
                    desc: `Result = ${value}, Parent = ${parent}`,
                },
                children: [
                    TreantConfig.NodeStructMaker(LRArr[0]),
                    TreantConfig.NodeStructMaker(LRArr[1])
                ]
            }
        }
        
    }
}


TreantConfig.TreantConfMaker = (recursiveCallbackArray, queryIDString) => {
    return {
        chart: {
            container: queryIDString,
            connectors: {type: "bCurve"},
            node: {collapsable: true},
        },
        nodeStructure: TreantConfig.NodeStructMaker(recursiveCallbackArray),
    }
}

module.exports = TreantConfig;