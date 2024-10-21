// Description:
// Remove all exclamation marks from the end of sentence.
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


function remove(string) {
    const replaceChar = (str, index, char) => str.substring(0, index) + char + str.substring(index + 1);

    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] === '!') {
            string = replaceChar(string, i, '')
        } else
            return string;
    }

    return string;
}

// function remove(s){
//     return s.replace(/!+$/, '');
// }


console.log(remove("Hi! Hi!!"))