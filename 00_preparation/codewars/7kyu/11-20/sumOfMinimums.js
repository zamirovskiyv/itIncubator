/*
 Task:
 Write a function that takes a 2D list (array) of size m * n and returns the sum of the minimum values in each row.

 Details:
 - For each row in the 2D list, find the smallest number.
 - Sum up all these minimum values and return the result.
 - The input will always be a non-empty list containing positive values.

 Example:
 Input:
 [
   [ 1, 2, 3, 4, 5 ],        # minimum value is 1
   [ 5, 6, 7, 8, 9 ],        # minimum value is 5
   [ 20, 21, 34, 56, 100 ]   # minimum value is 20
 ]
 Output: 26  (1 + 5 + 20 = 26)

 Notes:
 - You can assume the input contains only positive numbers.
 - The list will always contain at least one row and one column.
*/

function sumOfMinimums(arr) {
    let sumMin = 0;
    for (let i = 0; i < arr.length; i++) {
        sumMin += Math.min(...arr[i]);
    }
    return sumMin;
}

let nums = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
]

console.log(sumOfMinimums(nums))