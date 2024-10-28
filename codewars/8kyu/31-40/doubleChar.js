/*
 Given a string, return a new string in which each character (case-sensitive) is repeated once.

 Examples:
 "String"      -> "SSttrriinngg"
 "Hello World" -> "HHeelllloo  WWoorrlldd"
 "1234!_ "     -> "11223344!!__  "

 Good Luck!
*/

function doubleChar(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        res += (str[i]).repeat(2);
    }
    return res;
}

console.log(doubleChar("String"));
console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_ "));