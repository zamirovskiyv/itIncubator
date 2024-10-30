/*
 Complete the square sum function so that it squares each number in the array
 and then sums the squared values together.

 Example:
 For [1, 2, 2], the function should return 9, because:
 1^2 + 2^2 + 2^2 = 9
*/

function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 2);
    }
    return sum;
}

let ss = [1, 2, 2];
console.log(squareSum(ss));