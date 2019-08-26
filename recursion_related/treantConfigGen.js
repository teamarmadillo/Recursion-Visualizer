// Contains functions for generating a Treant config JSON object

const TreantConfig = {};


TreantConfig.TreantConfMaker = (recursiveCallbackArray, queryIDString) => {
    return {
        chart: {
            container: queryIDString,
            connectors: {type: "bCurve"},
            node: {collapsable: true},
        },
        nodeStructure: NodeStructMaker(recursiveCallbackArray),
    }
}

TreantConfig.NodeStructMaker = (recursiveCallbackArray) => {
    let {func, value, arg, parent, pos} = recursiveCallbackArray.pop();
    if (value == arg) {
        return {
            text: {
                name: `${func}`,
                title: `${func}(${arg})`,
                desc: `Result = ${value}\nParent = ${parent}`,
            }
        }
    }
    else {
        let nextCallback = {recursiveCallback, value: value - 1, baseCase};
        return {
            text: { name: `${recursiveCallback}(${value})`},
            children: [
                NodeStructMaker(nextCallback),
            ]
        }
    }
}


module.exports = TreantConfig;