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


TreantConfig.NodeStructMaker = (recursiveCallbackArray, nameFunc) => {
    let {func, value, arg, parent, pos} = recursiveCallbackArray[recursiveCallbackArray.length - 1];
    if (value == arg && recursiveCallbackArray.length === 1) {
        return {
            text: {
                // name: `fibTree`,
                title: `${nameFunc}(${arg})`,
                desc: `Result = ${value}`
                // , Parent = ${parent}`,
            }
        }
    }
    else {
        if (pos == "Center") {
            recursiveCallbackArray.pop();
            return {
                text: {
                    // name: `fibTree`,
                    title: `${nameFunc}(${arg})`,
                    desc: `Result = ${value}`
                    // , Parent = ${parent}`
                },
                children: [
                    TreantConfig.NodeStructMaker(recursiveCallbackArray, nameFunc),
                ]
            }
        }
        else {
            const LRArr = TreantConfig.preOrderSplit(recursiveCallbackArray);
            return {
                text: {
                    // name: `fibTree`,
                    title: `${nameFunc}(${arg})`,
                    desc: `Result = ${value}`
                    // , Parent = ${parent}`,
                },
                children: [
                    TreantConfig.NodeStructMaker(LRArr[0], nameFunc),
                    TreantConfig.NodeStructMaker(LRArr[1], nameFunc)
                ]
            }
        }
        
    }
}


TreantConfig.TreantConfMaker = (recursiveCallbackArray, queryIDString, name) => {
    return {
        chart: {
            container: queryIDString,
            connectors: {type: "bCurve"},
            node: {collapsable: true},
        },
        nodeStructure: TreantConfig.NodeStructMaker(recursiveCallbackArray, name),
    }
}

// module.exports = TreantConfig;