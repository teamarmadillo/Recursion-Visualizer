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
    let {value, arg, pos} = recursiveCallbackArray[recursiveCallbackArray.length - 1];
    if (value === arg && recursiveCallbackArray.length === 1) {
        return {
            text: {
                title: `${nameFunc}(${arg})`,
                desc: `Result = ${value}`
            }
        }
    }
    else {
        if (pos === "Center") {
            recursiveCallbackArray.pop();
            return {
                text: {
                    title: `${nameFunc}(${arg})`,
                    desc: `Result = ${value}`
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
                    title: `${nameFunc}(${arg})`,
                    desc: `Result = ${value}`
                },
                children: [
                    TreantConfig.NodeStructMaker(LRArr[0], nameFunc),
                    TreantConfig.NodeStructMaker(LRArr[1], nameFunc)
                ]
            }
        }
        
    }
};


TreantConfig.TreantConfMaker = (recursiveCallbackArray, queryIDString, name) => {
    return {
        chart: {
            container: queryIDString,
            connectors: {type: "bCurve"},
            node: {collapsable: true},
        },
        nodeStructure: TreantConfig.NodeStructMaker(recursiveCallbackArray, name),
    };
};


