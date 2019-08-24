

function fib(n) {
    if (n <= 1) return ` ${n}: ${n},`;
    else return ` ${n}: {${fib(n - 1) + fib(n - 2)}}, `;
}

function generateJSONString(callback, val) {
    return `{${callback(val)}}`
}
  
console.log(generateJSONString(fib, 5));