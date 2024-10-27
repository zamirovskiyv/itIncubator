/*
 Timmy & Sarah think they are in love, but in their town, they will only know for sure
 once they each pick a flower. If one flower has an even number of petals and the other
 has an odd number of petals, then they are in love.

 Write a function that takes the number of petals on each flower and returns 'true'
 if they are in love, and 'false' if they aren't.

 Example:
 (4, 7) --> true  (one flower has an even number of petals and the other has an odd number)
 (4, 8) --> false (both flowers have an even number of petals)
*/

function lovefunc(flower1, flower2) {
    return (flower1 % 2 === 0) !== (flower2 % 2 === 0);
}

console.log(lovefunc(4, 7))
console.log(lovefunc(4, 8))
console.log(lovefunc(453, 127))
