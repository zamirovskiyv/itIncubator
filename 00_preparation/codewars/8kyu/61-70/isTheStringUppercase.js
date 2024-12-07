/*
 Task:
 Create a function that checks if a given string is in ALL CAPS.

 Definition:
 - A string is considered to be in ALL CAPS if it does not contain any lowercase letters.
 - Strings without any letters at all (e.g., numbers or symbols) are also considered to be in ALL CAPS.

 Input:
 - A string containing letters, numbers, spaces, or symbols.

 Output:
 - Return `true` if the string is in ALL CAPS.
 - Return `false` otherwise.

 Examples:
 "c"                        --> false  (contains lowercase letter)
 "C"                        --> true   (all uppercase)
 "hello I AM DONALD"        --> false  (contains lowercase letters)
 "HELLO I AM DONALD"        --> true   (all uppercase)
 "ACSKLDFJSgSKLDFJSKLDFJ"   --> false  (contains a lowercase letter 'g')
 "ACSKLDFJSGSKLDFJSKLDFJ"   --> true   (all uppercase)

 Notes:
 - The function should correctly identify uppercase and lowercase letters.
 - Strings without any letters should also return `true`.
*/


String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase();
}

console.log('HELLO I AM DONALD'.isUpperCase())
console.log('HELLO I aM DONALD'.isUpperCase())