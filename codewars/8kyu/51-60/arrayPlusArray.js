/*
 Task:
 Write a function that takes two arrays as input and returns the sum of all their elements.

 Notes:
 - Each array will contain only integer numbers.
 - The output should be a single number, representing the total sum.

 Examples:
 Input: ([1, 2, 3], [4, 5, 6])
 Output: 21  (1 + 2 + 3 + 4 + 5 + 6 = 21)

 Input: ([0, -1, -2], [1, 2, 3])
 Output: 3  (0 + -1 + -2 + 1 + 2 + 3 = 3)
*/

function arrayPlusArray(arr1, arr2) {
    let res = arr1.concat(arr2);
    return res.reduce(function (a, b) {
        return a + b;
    });
    // return res.reduce((acc, cur) => acc + cur)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));