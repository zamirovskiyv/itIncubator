/*
 Write a function that takes a number and returns the corresponding ASCII character for that value.

 Example:
 65  --> 'A'
 97  --> 'a'
 48  --> '0'

 For the full ASCII table, you can refer to: http://www.asciitable.com/
*/


function getChar(c) {
    return String.fromCharCode(c)
}

for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100);
    console.log(getChar(number))
}
