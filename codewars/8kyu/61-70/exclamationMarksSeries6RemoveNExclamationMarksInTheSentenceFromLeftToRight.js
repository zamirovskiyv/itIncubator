/*
 Task:
 Write a function that removes `n` exclamation marks from a given sentence, working from left to right.

 Parameters:
 - `sentence`: A string that may contain letters, spaces, and exclamation marks.
 - `n`: A positive integer indicating the number of exclamation marks to remove.

 Rules:
 - Remove up to `n` exclamation marks, starting from the left.
 - If `n` exceeds the total number of exclamation marks in the sentence, remove all exclamation marks.
 - Return the resulting sentence.

 Examples:
 remove("Hi!", 1)                --> "Hi"
 remove("Hi!", 100)              --> "Hi"
 remove("Hi!!!", 1)              --> "Hi!!"
 remove("Hi!!!", 100)            --> "Hi"
 remove("!Hi", 1)                --> "Hi"
 remove("!Hi!", 1)               --> "Hi!"
 remove("!Hi!", 100)             --> "Hi"
 remove("!!!Hi !!hi!!! !hi", 1)  --> "!!Hi !!hi!!! !hi"
 remove("!!!Hi !!hi!!! !hi", 3)  --> "Hi !!hi!!! !hi"
 remove("!!!Hi !!hi!!! !hi", 5)  --> "Hi hi!!! !hi"
 remove("!!!Hi !!hi!!! !hi", 100) --> "Hi hi hi"

 Notes:
 - The function should work for any positive integer `n` and any input string containing exclamation marks.
 - Be mindful of edge cases like no exclamation marks or `n` being much larger than the count of exclamation marks.
*/

function remove(s, n) {
    let count = 0;
    let result = '';

    for (let char of s) {
        if (char === '!' && count < n) {
            count++;
        } else {
            result += char;
        }
    }

    return result;
}


console.log(remove("Hi!", 1))
console.log(remove("Hi!",100))
console.log(remove("Hi!!!",1))
console.log(remove("!!!Hi !!hi!!! !hi", 3))