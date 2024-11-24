/*
 Write a function that calculates the average of the numbers in a given array.

 Note:
 - If the array is empty, the function should return 0.

 Example:
 [1, 2, 3, 4, 5] --> 3  (average of the array elements)
 [] --> 0  (empty array returns 0)
*/

function findAverage(array) {
    if (array.length !== 0) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    } else
        return 0;
}

let average = [1, 2, 3, 4, 5];
let empty = [];

console.log(findAverage(average))
console.log(findAverage(empty))