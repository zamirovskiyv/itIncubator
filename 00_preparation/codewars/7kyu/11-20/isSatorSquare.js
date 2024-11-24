/*
 Task:
 Write a function to determine if a given N x N square matrix of uppercase letters forms a valid Sator Square.

 Definition:
 A Sator Square is a two-dimensional palindrome that satisfies all of the following:
 1. Each row reads the same left-to-right and right-to-left (horizontal palindrome).
 2. Each column reads the same top-to-bottom and bottom-to-top (vertical palindrome).
 3. Each row corresponds to its column index, meaning:
    - The first row is the same as the first column.
    - The second row is the same as the second column.
    - And so on for all rows and columns.

 Input:
 - An N x N matrix of uppercase letters (dimensions range from 2x2 to 33x33).

 Output:
 - Return `true` if the matrix forms a valid Sator Square.
 - Return `false` otherwise.

 Example:
 For the following square:
     B A T S
     A B U T
     T U B A
     S T A B
 The function should return `true` because:
 - Each row is a palindrome: BATS == STAB (reversed), ABUT == TUBA (reversed).
 - Each column is a palindrome: BAT == TAB (reversed), SUB == BUS (reversed).
 - Each row matches its corresponding column.

 Notes:
 - No need to validate the input (e.g., it's guaranteed to be a valid N x N matrix).
*/

function isSatorSquare(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== matrix[j][i] || matrix[i][j] !== matrix[n - 1 - i][n - 1 - j] || matrix[i][j] !== matrix[n - 1 - j][n - 1 - i]) {
                return false;
            }
        }
    }

    return true;
}

const matrix = [
    ['B', 'A', 'T', 'S'],
    ['A', 'B', 'U', 'T'],
    ['T', 'U', 'B', 'A'],
    ['S', 'T', 'A', 'B'],
];

console.log(isSatorSquare(matrix));
