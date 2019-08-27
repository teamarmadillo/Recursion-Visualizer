// Below are some pre-written recursion functions that can be selected
// in the program to see what they look like in the Tree Visualizer. 
// They are all stored in one object that can be exported

const RecursiveFuncs = {

    // Stack for storing state at each
    // recursive call of one of the function
    recursiveStates: [],

    // Function for clearing the stack
    clearStatesArray() {
        this.recursiveStates = [];
        console.log("Recursive States array is now empty");
    },

    // Fibonacci function (Tree recursion)
    fibTree(n, leftOrRight="Root", parent=null) {
        if (n <= 1) {
            this.recursiveStates.push({
                func: this.fibTree,
                arg: n,
                value: n,
                parent: parent,
                pos: leftOrRight
            });
            return n;
        }
        const val = this.fibTree(n - 1, `Right`, n) + this.fibTree(n - 2, `Left`, n);
        this.recursiveStates.push({
            func: this.fibTree,
            arg: n,
            value: val,
            parent: parent,
            pos: leftOrRight
        });
        return val;
    },

    // Fibonacci function (Tail recursion)
    fibTail(n, a=0, b=1, parent=null) {
        
        console.log(this.recursiveStates);
        if (n === 0) {
            this.recursiveStates.push({
                func: this.fibTail,
                arg: n,
                value: a,
                parent: parent,
                pos: "Center",
            });
            return a;
        }
        else if (n === 1) {
            this.recursiveStates.push({
                func: this.fibTail,
                arg: n,
                value: b,
                parent: parent,
                pos: "Center",
            });
            return b;
        }
        else {
            const fibCall = this.fibTail(n - 1, b, a+b, parent=n);
            this.recursiveStates.push({
                func: this.fibTail,
                arg: n,
                value: fibCall,
                parent: parent,
                pos: "Center",
            });
            return fibCall;
        }
    },

    // Factorial function (Tail recursion)
    factorialFunc(n, parent=null) {
        if (n < 1) return undefined;

        if (n === 1) {
            this.recursiveStates.push({
                func: this.factorialFunc,
                arg: n,
                value: n,
                parent: parent,
                pos: "Center",
            })
            return n;
        }
        const val = n * this.factorialFunc(n - 1, n);
        this.recursiveStates.push({
            func: this.factorialFunc,
            arg: n,
            value: val,
            parent: parent,
            pos: "Center",
        })
        return val;
    }

}



// /*
// Function #2: Count Set-Bits -> Given an integer n, return the integer's binary representation's number of bits set to 1
// */
// const countSetBits = (n) => { // Version 1
//     if (n === 0) return 0;
//     if (n & 1) return 1 + countSetBits(n >> 1);
//     else return countSetBits(n >> 1);
// }

// /*
// Function #3: Find 2^(2^A) % B -> Given two integers A and B, find the value returned be 2^(2^A) % B
// */
// const FAB = (A, B) => {
//     if (A === 1) return 4 % B;
//     else return (FAB(A-1, B) * FAB(A-1, B)) % B;
// }
