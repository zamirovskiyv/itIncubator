/*
 Welcome to this kata!

 Task:
 Write a function that squares every digit of a number and concatenates the results.

 Example:
 - If the input is 9119, the output should be 811181, because 9^2 is 81 and 1^2 is 1.
 - If the input is 765, the output should be 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25.

 Note:
 - The function accepts an integer as input and returns an integer as output.

 Happy Coding!
*/

function squareDigits(num) {
    let arr = Array.from(num.toString(), Number)
    let result = ''

    for (let i = 0; i < arr.length; i++) {
        result += Math.pow(arr[i], 2)
    }
    return Number(result);
}

console.log(squareDigits(9119))
console.log(squareDigits(765))
