/*
 Given a letter, return its position in the alphabet.

 Input:
 "a" --> Output: "Position of alphabet: 1"

 Note:
 Only lowercase English letters are tested.
*/

function position(letter){
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;

}

console.log(position('c'))