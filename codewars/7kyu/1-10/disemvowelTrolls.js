/*
 Trolls are attacking your comment section!

 To handle this, we need to remove all vowels from the trolls' comments to neutralize the threat.

 Task:
 Write a function that takes a string and returns a new string with all vowels removed.

 Example:
 - Input: "This website is for losers LOL!"
 - Output: "Ths wbst s fr lsrs LL!"

 Note:
 - For this kata, 'y' is not considered a vowel.
*/

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

let str = "This website is for losers LOL!"
let str2 = 'No offense but,\\nYour writing is among the worst I\'ve ever read'

// console.log(disemvowel(str));
console.log(disemvowel(str2));

// 'N ffns bt,\nr wrtng s mng th wrst \'v…' to equal
// 'N ffns bt,\nYr wrtng s mng th wrst \'…'
// N ffns bt,\nr wrtng s mng th wrst 'v vr rd
