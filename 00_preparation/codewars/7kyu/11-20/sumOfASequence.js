/*
 Task:
 Write a function that returns the sum of a sequence of integers.

 Details:
 - The sequence is defined by three non-negative values: `begin`, `end`, and `step`.
 - If the `begin` value is greater than the `end`, return 0.
 - Only include integers in the sequence that are exactly `step` apart,
   and don't include `end` if it is not reached by an exact step.

 Examples:
 - Input: (2, 2, 2) --> Output: 2   (Sequence: [2])
 - Input: (2, 6, 2) --> Output: 12  (Sequence: [2, 4, 6])
 - Input: (1, 5, 1) --> Output: 15  (Sequence: [1, 2, 3, 4, 5])
 - Input: (1, 5, 3) --> Output: 5   (Sequence: [1, 4])

 Notes:
 - `begin`, `end`, and `step` will always be non-negative integers.
 - The function should handle cases where the sequence is empty (e.g., `begin > end`).
*/

const sequenceSum = (begin, end, step) => {
    let res = 0;
    for (let i = begin; i <= end; i += step) {
        res += i;
    }
    return res;
};

console.log(sequenceSum(2,2,2))
console.log(sequenceSum(2,6,2))
console.log(sequenceSum(1,5,1))
console.log(sequenceSum(1,5,3))