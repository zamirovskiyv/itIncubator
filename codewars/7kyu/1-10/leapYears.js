/*
 Task:
 Write a function that determines whether a given year is a leap year or not.

 Rules:
 - A year is a leap year if it is divisible by 4.
 - However, if the year is also divisible by 100, it is not a leap year,
   unless the year is divisible by 400, in which case it is a leap year.

 Notes:
 - Tested years are in the range 1600 ≤ year ≤ 4000.

 Examples:
 - 2000 is a leap year (divisible by 400)
 - 1900 is not a leap year (divisible by 100 but not by 400)
 - 2004 is a leap year (divisible by 4 but not by 100)
*/


function isLeapYear(year) {

    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    return year % 4 === 0;



}

console.log(isLeapYear(2020))
// console.log(isLeapYear(1900))
console.log(isLeapYear(2020))
console.log('2000=', isLeapYear(2000)) //true
console.log('2100=', isLeapYear(2100)) //false
console.log('2015=', isLeapYear(2015)) //false