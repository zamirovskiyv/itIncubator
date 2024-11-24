/*
 Task:
 Write a function that takes an integer as input and returns the name of the planet corresponding to that number.

 Details:
 - The planets in the solar system are indexed as follows:
   1: Mercury
   2: Venus
   3: Earth
   4: Mars
   5: Jupiter
   6: Saturn
   7: Uranus
   8: Neptune
 - The function should return the correct planet name for a given integer.

 Example:
 - Input: 3 --> Output: "Earth"
 - Input: 5 --> Output: "Jupiter"

 Notes:
 - Ensure the function handles only valid inputs (1 through 8).
 - If the function is not returning the correct values, check the mapping logic or indexing.
*/


function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
    }

    return name;
}

console.log(getPlanetName(3))