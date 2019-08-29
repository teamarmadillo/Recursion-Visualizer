
const MakeStates = {
    recursiveStates: [],

    update: function(funcObj, parent = null) {
        let {name, recursiveFunc, arg, baseCase, numCalls} = funcObj;
    
        let result = recursiveFunc(arg);
        let hitsBaseCase = false;
        baseCase.map((bc) => {
            if (arg <= bc) hitsBaseCase = true;
            return bc;
        });

        if (hitsBaseCase) {
            this.recursiveStates.push({name, parent, arg, result: arg});
            return;
        }
        this.recursiveStates.push({name, parent, arg, result});
    
    //create # of updates based on 
    //update arg based on numCalls
        for (let i = 1; i < numCalls + 1; i++) {
            this.update({name, recursiveFunc, arg: arg - i, baseCase, numCalls}, arg)
        }
        return;
    },

    clearStates: function() {
        this.recursiveStates = [];
    }
}

// function fibTree(n, leftOrRight="Root", parent=null) {
//     if (n <= 1) {
//         // recursiveStates.push({
//         //     func: fibTree,
//         //     arg: n,
//         //     value: n,
//         //     parent: parent,
//         //     pos: leftOrRight
//         // });
//         return n;
//     }
//     const val = fibTree(n - 1, `Right`, n) + fibTree(n - 2, `Left`, n);
//     // recursiveStates.push({
//     //     func: fibTree,
//     //     arg: n,
//     //     value: val,
//     //     parent: parent,
//     //     pos: leftOrRight
//     // });
//     return val;
// }

// let fibo2 = {
//     name: 'fib',
//     arg: 3,
//     baseCase: [0, 1],
//     recursiveFunc: fibTree,
//     numCalls: 2
// }

// MakeStates.update(fibo2);
// console.log(MakeStates.recursiveStates);

module.exports = MakeStates;
