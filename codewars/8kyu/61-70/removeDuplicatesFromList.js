/*
 Task:
 Write a function that removes duplicates from an array of non-negative numbers and returns the array with unique values.
 The order of elements in the array must remain the same.

 Examples:
 Input: [1, 1, 2]
 Output: [1, 2]

 Input: [1, 2, 1, 1, 3, 2]
 Output: [1, 2, 3]

 Notes:
 - The input array will always contain non-negative numbers.
 - The function should preserve the original order of the sequence.
*/

function distinct(a) {
    let results = [];
    for (let i = 0; i < a.length; i++) {
        if (!results.includes(a[i])) {
            results.push(a[i]);
        }
    }
    return results;
    // return [...new Set(a)];
}

console.log(distinct([1, 1, 9, 8, 6, 2, 6]))
console.log(distinct([1198626, 3014008, 3927682, 3946056, 4936639]))