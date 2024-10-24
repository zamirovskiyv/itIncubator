// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.


function testEven(n) {
    return n % 2 === 0;
}


let n = [0, 0.5, 1, 2, 3, 4, -4 ]

for (let i = 0; i < n.length; i++) {
    console.log(`number is positive: ${n[i]} - ${testEven(n[i])}`)
}