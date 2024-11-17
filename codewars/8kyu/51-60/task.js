/*
 Task:
 Write a function that calculates the sum of all numbers in a given array, except the highest and the lowest elements.

 Rules:
 - Exclude the highest and lowest elements by value, not by index.
 - If there are multiple occurrences of the highest or lowest value, exclude only one of each.
 - Return 0 if:
   - The input is null, undefined, or any empty value.
   - The array has fewer than 2 elements.

 Examples:
 Input: [6, 2, 1, 8, 10]
 Output: 16  (sum of 2, 6, 8; excluding 1 and 10)

 Input: [1, 1, 11, 2, 3]
 Output: 6  (sum of 2 and 3; excluding one 1 and 11)

 Input: []
 Output: 0  (empty input)

 Input: [5]
 Output: 0  (only one element)

 Notes:
 - Handle input validation carefully to avoid runtime errors.
*/

function sumArray(array) {
    if (!array) return 0;
    if (array.length <= 1) return 0;

    let res;
    let maxNum = Math.max(...array);
    let minNum = Math.min(...array);

    for (let i = 0; i < array.length; i++) {
        if (maxNum === array[i]) {
            res = array.splice(i, 1);
            break;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (minNum === array[i]) {
            res = array.splice(i, 1);
            break;
        }
    }


    return array.reduce((acc, number) => acc + number, 0);
}


console.log(sumArray([6, 2, 1, 8, 10])) // 16
console.log(sumArray([1, 1, 11, 2, 3])) // 6
