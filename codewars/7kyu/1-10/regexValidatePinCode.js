/*
 Task:
 Write a function to validate ATM PIN codes. A valid PIN:
 - Must contain exactly 4 or 6 digits.
 - Must consist of digits only (no letters, symbols, or spaces).

 The function should return:
 - true if the PIN is valid.
 - false otherwise.

 Examples:
 "1234"   --> true   (valid 4-digit PIN)
 "12345"  --> false  (invalid length)
 "a234"   --> false  (contains a letter)
 "098765" --> true   (valid 6-digit PIN)
*/


function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }

    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9') {
            return false;
        }
    }

    return true;
}

console.log(validatePIN('1234'))
console.log(validatePIN('a234'))
console.log(validatePIN('12345'))
console.log(validatePIN('123456'))
console.log(validatePIN('1'))