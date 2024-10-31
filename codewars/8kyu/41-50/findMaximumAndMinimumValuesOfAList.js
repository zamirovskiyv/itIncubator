/*
 Task:
 Create two functions (e.g., max and min) that take a list of integers as input
 and return the largest and smallest number in that list, respectively.
 Each function should return a single number.

 Examples:
 [4, 6, 2, 1, 9, 63, -134, 566]         -> max = 566, min = -134
 [-52, 56, 30, 29, -54, 0, -110]        -> max = 56, min = -110
 [42, 54, 65, 87, 0]                    -> max = 87, min = 0
 [5]                                    -> max = 5, min = 5
*/

var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    return Math.max(...list)
}

console.log(`max = ${max([4, 6, 2, 1, 9, 63, -134, 566])}, min = ${min([4, 6, 2, 1, 9, 63, -134, 566])}`);
console.log(`max = ${max([-52, 56, 30, 29, -54, 0, -110])}, min = ${min([-52, 56, 30, 29, -54, 0, -110])}`);
console.log(`max = ${max([42, 54, 65, 87, 0])}, min = ${min([42, 54, 65, 87, 0])}`);
console.log(`max = ${max([5])}, min = ${min([5])}`);