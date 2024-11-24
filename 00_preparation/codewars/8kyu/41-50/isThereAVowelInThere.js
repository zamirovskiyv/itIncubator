/*
 Given an array of numbers, check if any of the numbers are character codes for lowercase vowels (a, e, i, o, u).

 If a number matches a character code for a vowel, replace the array value with the corresponding vowel as a string.

 Return the resulting array.

 Example:
 [97, 98, 99, 100, 101]  -->  ['a', 98, 99, 100, 'e']

 Vowel Character Codes:
 'a' -> 97
 'e' -> 101
 'i' -> 105
 'o' -> 111
 'u' -> 117
*/

function isVow(a) {
    const vowels = [97, 101, 105, 111, 117]; // ASCII-коды для 'a', 'e', 'i', 'o', 'u'
    let res = [];

    for (let i = 0; i < a.length; i++) {
        if (vowels.includes(a[i])) {
            res.push(String.fromCharCode(a[i])); // Заменяем на букву, если это гласная
        } else {
            res.push(a[i]); // Иначе оставляем как есть
        }
    }
    return res;
}

let arr = [97, 98, 99, 100, 101];
console.log(isVow(arr));

