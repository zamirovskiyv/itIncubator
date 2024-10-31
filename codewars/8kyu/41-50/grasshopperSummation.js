/*
 Summation:
 Write a program that finds the summation of every number from 1 to 'num'.
 The input number will always be a positive integer greater than 0.

 Note:
 Your function only needs to return the result; the summation breakdown shown
 in the example is for clarity and not part of the function output.

 Examples:
 2  -->  3   (1 + 2)
 8  --> 36   (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

var summation = function (num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation(2))
console.log(summation(8))