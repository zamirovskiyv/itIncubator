/*
 Sentence Smash
 Write a function that takes an array of words and smashes them together into a sentence,
 returning the sentence as a single string. Spaces should be added between each word,
 but there shouldn't be any space at the beginning or end of the sentence.

 Example:
 ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 words = ['hello', 'world', 'this', 'is', 'great']
 smash(words) # returns "hello world this is great"

 Assumptions:
 - You can assume that you are only given words.
 - You cannot assume the size of the array.
 - You can assume that you will receive an array.

 Purpose:
 - We're testing basic loops and string manipulation for beginners.
 - Advanced users may accomplish this in one line.
*/


function smash(words) {
    let res = '';
    for (let word of words) {
        if (word !== undefined)
            res = res + ' ' + word;
    }
    if (res)
        res = res.trim();
    return res

    // return words.join(" ");
}

// let words = ['hello', 'world', 'this', 'is', 'great']
let words = ['hello', 'world']
// let words = ['hello']
// let words = []
console.log(smash(words))