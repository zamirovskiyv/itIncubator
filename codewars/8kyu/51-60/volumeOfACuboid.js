/*
 Task:
 Write a function that calculates the volume of a cuboid, given its length, width, and height.

 Formula:
 Volume = length * width * height

 Examples:
 Input: (2, 3, 4)
 Output: 24  (2 * 3 * 4 = 24)

 Input: (5, 10, 2)
 Output: 100  (5 * 10 * 2 = 100)

 Notes:
 - All inputs will be positive numbers.
 - The function should return the calculated volume as a number.
*/

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * height * width;
    }
}


console.log(Kata.getVolumeOfCuboid(2,3,4))