/*
 Task:
 Write a function that returns a personalized greeting based on two parameters: `name` and `owner`.

 Rules:
 - If `name` equals `owner`, return "Hello boss".
 - Otherwise, return "Hello guest".

 Examples:
 Input: ("Daniel", "Daniel")
 Output: "Hello boss"

 Input: ("Greg", "Daniel")
 Output: "Hello guest"
*/

function greet (name, owner) {
    if (name === owner) {
        return `Hello boss`;
    } else {
        return `Hello guest!`;
    }
}

console.log(greet("Daniel", "Daniel"))
console.log(greet("Greg", "Daniel"))