/*
 Task:
 Complete the `Person` class. The class is already defined, but you need to:
 1. Implement the `constructor` method to accept:
    - `name` as a string
    - `age` as a number
 2. Implement the `getInfo` method (or getter property `info`) which should return a string in the format:
    "{name}s age is {age}" (e.g., "johns age is 34").

 Reference:
 - Learn more about JavaScript classes:
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

 Example:
 const person = new Person("John", 34);
 console.log(person.getInfo()); // "Johns age is 34"
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info() {
        return `${this.name}s age is ${this.age}`;
    }
}

const person = new Person("John", 34);
console.log(person.info())

