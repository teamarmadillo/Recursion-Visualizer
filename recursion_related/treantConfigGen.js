// Contains functions for generating a Treant config JSON object

const TreantConfig = {};


TreantConfig.TreantConfMaker = (recursiveCallbackObj, queryIDString) => {
    return {
        chart: {
            container: queryIDString,
            connectors: {type: "bCurve"},
            node: {collapsable: true},
        },
        nodeStructure: NodeStructMaker(recursiveCallbackObj),
    }
}

TreantConfig.NodeStructMaker = (recursiveCallbackObj) => {
    let {recursiveCallback, value, baseCase} = recursiveCallbackObj;
    if (value === baseCase) {
        return {
            text: { name: `${recursiveCallback}(${value})`}
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