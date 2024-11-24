/*
 If you can't sleep, just count sheep!

 Task:
 Given a non-negative integer (e.g., 3), return a string with a murmur format:
 "1 sheep...2 sheep...3 sheep...".

 Note:
 Input will always be valid, meaning no negative integers.

 Examples:
 3 --> "1 sheep...2 sheep...3 sheep..."
*/

var countSheep = function (num){
    let sheep = '';
    for (var i = 1; i <= num; i++) {
        sheep = sheep + `${i} sheep...`
    }
    return sheep;
}

console.log(countSheep(3));