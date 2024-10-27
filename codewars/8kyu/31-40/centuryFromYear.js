/*
 Introduction:
 The first century spans from the year 1 up to and including the year 100,
 the second century - from the year 101 up to and including the year 200, etc.

 Task:
 Given a year, return the century it is in.

 Examples:
 1705 --> 18
 1900 --> 19
 1601 --> 17
 2000 --> 20
 2742 --> 28

 Note:
 This kata uses strict construction as shown in the description and the examples.
*/

function century(year) {
    if (year < 100)
        return 1;
    if (year % 100 !== 0) {
        return (Math.trunc(year / 100) + 1);
    } else
        return year / 100;
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(2742));