/*
 Task:
 Write a function that accepts three integers (a, b, c) representing the lengths of the sides of a triangle.
 The function should return:
 - true if a valid triangle can be formed with the given sides.
 - false otherwise.

 Rules:
 - A triangle is valid if the sum of the lengths of any two sides is greater than the length of the third side.
 - All sides must be positive integers (greater than 0) for the triangle to have a valid surface.

 Examples:
 Input:  1, 2, 2  --> true   (valid triangle)
 Input:  4, 2, 3  --> true   (valid triangle)
 Input:  2, 2, 2  --> true   (valid triangle)
 Input:  1, 2, 3  --> false  (1 + 2 is not greater than 3)
 Input: -5, 1, 3  --> false  (negative side length is invalid)
 Input:  0, 2, 3  --> false  (zero side length is invalid)
 Input:  1, 2, 9  --> false  (1 + 2 is not greater than 9)
*/

function isTriangle(a, b, c) {
    if ((a < 1) || (b < 1) || (c < 1)) {
        return false;
    }

    return (a + b > c) && (a + c > b) && (b + c > a);
}

console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))