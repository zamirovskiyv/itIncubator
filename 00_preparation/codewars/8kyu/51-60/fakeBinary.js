/*
 Task:
 Write a function that takes a string of digits and replaces:
 - Any digit below 5 with '0'.
 - Any digit 5 or above with '1'.

 The function should return the resulting string.

 Example:
 Input: "45385593107843568"
 Output: "01011110001100111"

 Notes:
 - The input string will never be empty.
 - The output should retain the same length as the input, with digits replaced according to the rules.
*/

function fakeBin(x) {
    let res = '';
    for (let i = 0; i < x.length; i++) {
        res += x[i] < 5? '0':'1'
    }

    return res
}

console.log(fakeBin("45385593107843568"))
console.log(fakeBin("45385593107843568") === "01011110001100111")