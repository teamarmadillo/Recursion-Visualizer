// Below are a list of pre-written classic recursion functions that can be selected
// in the program to see what they look like in the call stack. They are all stored
// in one object that can be exported

// const TreantConfig = require('./treantConfigGen');
// import TreantConfig from './treantConfigGen.js';
// const Treant = require('../treant-js-master/Treant');


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
        this.recursiveStates.push({
            func: this.fibTail,
            arg: n,
            value: b,
            parent: parent,
            pos: "Center",
        }); 
        if (n === 0) return a;
        else if (n === 1) return b;
        else return this.fibTail(n - 1, b, a+b, parent=n);
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
// Function #1: Fibonacci -> Given an integer n, return the nth number in the Fibonacci series
// Version 1 = Tree Recursion returning an integer
// Version 3 = Tail Recursion returning an integer
// */
// const fib1 = n => { // Version 1
//     if (n <= 1) return n;
//     else return fib1(n - 1) + fib1(n - 2);
// }

// // const fib2 = n => { // Version 2
// //     if (n <= 1) return ` ${n}: ${n},`;
// //     else return ` ${n}: {${fib(n - 1) + fib(n - 2)}}, `;
// // }

// const fib3 = (n, a=0, b=1) => { // Version 3
//     if (n === 0) return a;
//     else if (n === 1) return b;
//     else return fib3(n - 1, b, a + b);
// }

// // const fib4 = (n, a=0, b=1) => { // Version 4
// //     if (n === 0) return ` ${n}: ${a},`;
// //     else if (n === 1) return ` ${n}: ${b},`;
// //     else return ` ${n}: {${fib4(n - 1, b, a + b)}}`
// // }

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

// /*
// Function #4: Factorial -> Given an integer greater than 0 n, find n!
// */
// const Factorial = (n) => {
//     if (n < 1) return undefined;
//     if (n === 1) return n;
//     else return n * Factorial(n - 1);
// }

// const val = RecursiveFuncs.fibTree(3);
// // console.log(val);
// console.log(RecursiveFuncs.recursiveStates)
// let obj = TreantConfig.TreantConfMaker(RecursiveFuncs.recursiveStates);
// console.log(obj);
// // const sorted = RecursiveFuncs.recursiveStates.sort((a, b) => (a.parent > b.parent) ? 1:-1);
// // console.log(sorted);
// RecursiveFuncs.clearStatesArray();

// const otherVal = RecursiveFuncs.fibTail(7);
// console.log(otherVal);
// console.log(RecursiveFuncs.recursiveStates)
// RecursiveFuncs.clearStatesArray();

// const anotherVal = RecursiveFuncs.factorialFunc(5);
// console.log(RecursiveFuncs.factorialFunc(5));
// console.log(RecursiveFuncs.recursiveStates);
// RecursiveFuncs.clearStatesArray();
