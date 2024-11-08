/*
 Task:
 Write a function that takes a string of words and returns the length of the shortest word(s).

 Details:
 - The input string will never be empty.
 - You do not need to account for different data types.

 Examples:
 Input: "The quick brown fox"
 Output: 3  (the shortest word is "The")

 Input: "Jumped over the lazy dog"
 Output: 3  (the shortest word is "the")
*/

function findShort(s) {
    let str = s.split(' ').reduce((acc, cur) => cur.length < acc.length ? cur : acc);
    return str.length;
}

let str = "The quick brown fox";
console.log(findShort(str));