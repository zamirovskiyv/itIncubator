/*
 You're at the zoo, and all the meerkats look strange. Their heads and tails
 have been swapped! Your task is to save the animals by switching them back.

 Task:
 Given an array with three elements in the order (tail, body, head),
 rearrange the array so that the order becomes (head, body, tail).

 Note:
 This logic should be applied to all arrays you receive in the tests.

 Example:
 ["tail", "body", "head"]  -->  ["head", "body", "tail"]

 Simples!
*/

function fixTheMeerkat(arr) {
        return [arr[2], arr[1],arr[0]];
}

arr = ["tail", "body", "head"]
console.log(fixTheMeerkat(arr))