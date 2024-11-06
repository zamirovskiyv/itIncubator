/*
 Task:
 Write a function that accepts an odd-length array of integers where all numbers are the same
 except for one single number. The function should return that single different number.

 Notes:
 - The input array will always be valid, with an odd length (>= 3).
 - There will always be exactly one unique number in the array.

 Examples:
 [1, 1, 2]                              ==> 2
 [17, 17, 3, 17, 17, 17, 17]            ==> 3
 [4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4]   ==> 7
*/

function stray(numbers) {
    const countItems = {};

    for (const item of numbers) {
        countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
    }

    return +Object.keys(countItems).filter((item) => countItems[item] < 2);
}

let arr1 = [1, 1, 2]
let arr2 = [4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4]

console.log(stray(arr1))
console.log(stray(arr2))



