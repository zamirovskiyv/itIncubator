/*
 Task:
 As the captain of a pirate ship, your task is to check if all gunners are ready before giving the order to fire.

 Input:
 - A dictionary (object in JavaScript) where the keys represent gunners, and the values are either "aye" or "nay".

 Output:
 - Return "Fire!" if all gunners are ready (all answers are "aye").
 - Return "Shiver me timbers!" if one or more gunners are not ready (any answer is "nay").

 Rules:
 - Firing with less than all gunners ready is not allowed.
 - Ensure the function works for 2, 3, or 4 gunners in the dictionary.

 Examples:
 Input: { "gunner1": "aye", "gunner2": "aye", "gunner3": "aye" }
 Output: "Fire!"

 Input: { "gunner1": "aye", "gunner2": "nay", "gunner3": "aye" }
 Output: "Shiver me timbers!"

 Notes:
 - This is a simple check to ensure all gunners are ready before firing.
 - Ensure the solution works for varying numbers of gunners.
*/


const cannonsReady = (gunners) => {
    const isAnyNay = Object.values(gunners).some(value => value === 'nay');
    return isAnyNay ? 'Shiver me timbers!' : 'Fire!';
}

console.log(cannonsReady({"gunner1": "aye", "gunner2": "aye", "gunner3": "aye"}))
console.log(cannonsReady({"gunner1": "aye", "gunner2": "nay", "gunner3": "aye"}))