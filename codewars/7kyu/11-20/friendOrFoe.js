/*
 Task:
 Write a program that filters a list of strings and returns a list with only your friends' names.

 Rules:
 - A friend's name has exactly 4 letters.
 - Names with any other number of letters should be excluded.
 - Keep the original order of names in the output.

 Input:
 - A list of strings containing names. All names will only contain letters.

 Output:
 - A list of names with exactly 4 letters.

 Examples:
 Input: ["Ryan", "Kieran", "Jason", "Yous"]
 Output: ["Ryan", "Yous"]

 Input: ["Peter", "Stephen", "Joe"]
 Output: []

 Notes:
 - Ensure that the program preserves the order of names in the input list.
*/


function friend(friends) {
    let str = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            str.push(friends[i]);
        }
    }
    return str;
    // return friends.filter(n => n.length === 4);
}

let friends = ["Ryan", "Kieran", "Jason", "Yous"]
let friends2 = ["Peter", "Stephen", "Joe"]

console.log(friend(friends))
console.log(friend(friends2))