/*
 Task Overview:
 Given a non-negative integer 'b', write a function that returns an integer 'd'
 such that the binary representation of 'b' is the same as the decimal representation of 'd'.

 Examples:
 b = 1 should return 1     // Binary: 1, Decimal: 1
 b = 5 should return 101   // Binary: 101, Decimal: 5
 b = 11 should return 1011 // Binary: 1011, Decimal: 11
*/


function toBinary(n) {
    return parseInt(n.toString(2));
}

let a = 1
let b = 5
let c = 11

console.log(toBinary(a))
console.log(toBinary(b))
console.log(toBinary(c))