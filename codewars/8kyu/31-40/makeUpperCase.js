/*
 Write a function that converts the input string to uppercase.

 Example:
 "hello" --> "HELLO"
*/

function makeUpperCase(str) {
    return String(str).toUpperCase();
}

let str = "hello world";
console.log(makeUpperCase(str));