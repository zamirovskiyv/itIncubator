/*
 Task:
 Write a function that returns the number (count) of vowels in the given string.

 Details:
 - Consider 'a', 'e', 'i', 'o', 'u' as vowels for this Kata (but not 'y').
 - The input string will only contain lowercase letters and/or spaces.

 Example:
 - Input: "hello world"
 - Output: 3  (vowels: 'e', 'o', 'o')
*/

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count += vowels.includes(str[i])
    }
    return count;

    // return str.split('').filter(char => 'aeiou'.includes(char)).length;
}

let str = 'hello world'
console.log(getCount(str));