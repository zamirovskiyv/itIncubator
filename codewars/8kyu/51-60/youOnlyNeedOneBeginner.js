/*
 Task:
 Write a function that takes an array `a` and a value `x` as input.
 The function should check whether the array contains the given value.

 Details:
 - The array `a` can contain numbers or strings.
 - The value `x` can be either a number or a string.
 - Return `true` if the array contains the value, and `false` otherwise.

 Examples:
 Input: ([1, 2, 3, 4], 3)
 Output: true

 Input: (["apple", "banana", "cherry"], "pear")
 Output: false
*/

function check(a, x) {
    return a.includes(x)
}

console.log(check([1, 2, 3, 4], 3))
console.log(check(["apple", "banana", "cherry"], "pear"))