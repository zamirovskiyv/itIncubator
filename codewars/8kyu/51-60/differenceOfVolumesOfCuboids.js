/*
 Task:
 Write a function that takes two lists of integers, `a` and `b`. Each list contains 3 positive integers
 (representing the dimensions of two cuboids). The function should return the absolute difference
 between the volumes of the two cuboids.

 Details:
 - Calculate the volume of each cuboid using the formula: volume = length * width * height.
 - Return the absolute difference between the two volumes.

 Example:
 Input: ([2, 2, 3], [5, 4, 1])
 Output: 8
 Explanation:
 - Volume of `a` = 2 * 2 * 3 = 12
 - Volume of `b` = 5 * 4 * 1 = 20
 - Absolute difference = |12 - 20| = 8

 Notes:
 - The input will always consist of two lists of three positive integers.
 - If possible, try writing the function in a single line of code.
*/

function findDifference(a, b) {
    return Math.abs(a.reduce((acc, rec) => acc * rec) - b.reduce((acc, rec) => acc * rec));
}

console.log(findDifference([2, 2, 30], [5, 4, 1]))