/*
 Task:
 Write a function `maskify` that masks all characters in a given string except for the last four characters.
 Replace all but the last four characters with '#'.

 Examples:
 - "4556364607935616" --> "############5616"
 - "64607935616"      --> "#######5616"
 - "1"                --> "1"       (if the string has fewer than 4 characters, return it as is)
 - ""                 --> ""       (empty string returns empty string)

 Additional example:
 - "Skippy"           --> "##ippy"
 - "Nananananananananananananananana Batman!" --> "####################################man!"

 Note:
 - This function can be used to mask sensitive information such as credit card numbers or answers to secret questions.
*/

function maskify(cc) {
    if (cc.length <= 4) return cc;
    let str = '';
    for (let i = 0; i < cc.length - 4; i++) {
        str += cc[i] = '#'
    }
    str += cc.slice((cc.length - 4), cc.length)

    return str;
    // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

let str = "4556364607935616";
console.log(maskify(str));
console.log(maskify(''));
console.log(maskify('1234'));