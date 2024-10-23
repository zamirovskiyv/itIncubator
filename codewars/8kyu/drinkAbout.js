/*
 Kids drink toddy.
 Teens drink coke.
 Young adults drink beer.
 Adults drink whisky.

 Make a function that receives 'age' and returns what they drink.

 Rules:
 - Children are under 14 years old.
 - Teens are under 18 years old.
 - Young adults are under 21 years old.
 - Adults are 21 years old or older.

 Examples:
 13  --> "drink toddy"
 17  --> "drink coke"
 18  --> "drink beer"
 20  --> "drink beer"
 30  --> "drink whisky"
*/


function peopleWithAgeDrink(old) {
    if (old < 14) return "drink toddy"
    if (old >= 14 && old < 18) return "drink coke"
    if (old >= 18 && old < 21) return "drink beer"
    if (old >= 21) return "drink whisky"
};

for (let i = 0; i < 10; i++) {
    let ears = Math.floor(Math.random() * 50);
    console.log(peopleWithAgeDrink(ears))
}
