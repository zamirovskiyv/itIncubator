/*
 Task:
 Write a function that takes two numbers as parameters:
 - The first number is the coefficient.
 - The second number is the exponent.

 The function should:
 1. Multiply the coefficient by the exponent.
 2. Subtract 1 from the exponent.
 3. Return the resulting expression as a string in the format "resultx^newExponent".

 Rules:
 - The exponent will never be 1.
 - Neither the coefficient nor the exponent will ever be 0.
 - "^1" should not be truncated (e.g., "3x^1" is valid output).

 Examples:
 derive(7, 8) --> "56x^7" (7 * 8 = 56, 8 - 1 = 7)
 derive(5, 9) --> "45x^8" (5 * 9 = 45, 9 - 1 = 8)
*/

function derive(coefficient, exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
}

console.log(derive(7, 8))
console.log(derive(5, 9))