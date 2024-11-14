/*
 Task:
 Implement a method called `main` that prints the line "Hello World!" (including a newline character at the end).
 The method should not return anything.

 Notes:
 - In some languages, `main` is the entry point of the program.
 - The method will be tested as `Solution.main("parameter1", "parameter2")`, so it should handle extra arguments gracefully.
 - The scope of `main` and how it is defined may depend on the language you're using.
 - For object-oriented languages, `main` can be defined as an attribute or method of the `Solution` class.
 - Make sure the method only prints "Hello World!" without any additional output or return.
*/

// Print "Hello World!" to the screen

class Solution {
    static main(...args) {
        console.log("Hello World!");
    }
}

// Тест
Solution.main();             // Вывод: "Hello World!"
Solution.main("test");       // Вывод: "Hello World!"
Solution.main("a", "b", "c"); // Вывод: "Hello World!"
