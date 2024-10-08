// Description:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

function abbrevName(name) {
    let editName = name.trim()
    let firstSymbol, secondSymbol, result

    firstSymbol = editName[0].toUpperCase()

    for (let i = 0; i < editName.length; i++) {
        if (editName[i] === ' ') {
            secondSymbol = editName[i + 1].toUpperCase();
        }
    }
    result = firstSymbol + '.' + secondSymbol;

    return result;
}


let name = abbrevName("Sam Harris")
console.log(name)

