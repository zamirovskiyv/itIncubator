/*
 Task:
 Write a function that takes a list (array) as input and returns the list in reverse order.

 Examples:
 Input: [1, 2, 3, 4]
 Output: [4, 3, 2, 1]

 Input: [9, 2, 0, 7]
 Output: [7, 0, 2, 9]

 Notes:
 - The input will always be a valid list (array).
 - Ensure the function does not modify the original list.
*/

function reverseList(list) {
   return  list.reverse()
}

console.log(reverseList([1, 2, 3, 4]))
console.log(reverseList([9, 2, 0, 7]))