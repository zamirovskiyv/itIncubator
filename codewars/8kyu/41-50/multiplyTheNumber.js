/*
 Jack really likes his number five. The task here is to multiply each given number
 by 5 raised to the power of the number of digits in that number.

 Examples:
  3   -->    15   (  3 * 5¹ )
 10   -->   250   ( 10 * 5² )
 200  --> 25000   (200 * 5³ )
  0   -->     0   (  0 * 5¹ )
 -3   -->   -15   ( -3 * 5¹ )
*/

function multiply(number) {
    if (number < 0) {
        number = -1 * number
        return -1 * (number * (Math.pow(5, (number.toString()).length)))
    }

    return number * (Math.pow(5, (number.toString()).length))

    // const digits = Math.abs(number).toString().length;
    // return number * Math.pow(5, digits);
}

console.log(multiply(3))
console.log(multiply(10))
console.log(multiply(200))
console.log(multiply(0))
console.log(multiply(-3))