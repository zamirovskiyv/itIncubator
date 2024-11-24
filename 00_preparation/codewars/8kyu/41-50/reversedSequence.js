/*
 Build a function that returns an array of integers from 'n' down to 1, where 'n' is a positive integer.

 Example:
 n = 5  -->  [5, 4, 3, 2, 1]
*/

const reverseSeq = n => {
    let reversed = [];
    for (let i = n; i > 0; i--) {
        reversed.push(i);
    }
    return reversed;
};

console.log(reverseSeq(5))