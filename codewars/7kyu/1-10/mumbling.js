/*
 Task:
 Write a function that takes a string as input and returns a new string formatted such that:
 - Each character in the string is repeated based on its position in the string.
 - The first occurrence of each character is capitalized, and the subsequent occurrences are lowercase.
 - Each formatted segment is separated by a hyphen.

 Examples:
 accum("abcd")    -> "A-Bb-Ccc-Dddd"
 accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 accum("cwAt")    -> "C-Ww-Aaa-Tttt"

 Note:
 - The input string will only include letters from a..z and A..Z.
*/

function accum(s) {
    return s
        .split('')
        .map((char, index) =>
            char.toUpperCase() + char.toLowerCase().repeat(index)
        )
        .join('-');
}

let str = 'abcd'
console.log(accum(str))