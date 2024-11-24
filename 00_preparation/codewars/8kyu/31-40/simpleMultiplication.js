/*
 This kata is about multiplying a given number by eight if it is an even number,
 and by nine if it is an odd number.

 Example:
 4 --> 32  (since 4 is even, 4 * 8 = 32)
 5 --> 45  (since 5 is odd, 5 * 9 = 45)
*/

function simpleMultiplication(number) {
    if (number % 2 === 0) return number * 8; else return number * 9;
    // return number % 2 === 0 ? number * 8 : number * 9;
}

let odd = 5;
let even = 4;

console.log(simpleMultiplication(odd));
console.log(simpleMultiplication(even));