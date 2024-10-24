// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.
// Input: 1
// Output: "One".
// If your language supports it, try using a switch statement.

function switchItUp(number) {
    let text;
    switch (number) {
        case 0:
            text = 'Zero';
            break;
        case 1:
            text = 'One';
            break;
        case 2:
            text = 'Two';
            break;
        case 3:
            text = 'Three';
            break;
        case 4:
            text = 'Four';
            break;
        case 5:
            text = 'Five';
            break;
        case 6:
            text = 'Six';
            break;
        case 7:
            text = 'Seven';
            break;
        case 8:
            text = 'Eight';
            break;
        case 9:
            text = 'Nine';
            break;
        default:
            text = 'Unknown number'
    }
    return text
}

let number = Math.floor(Math.random() * 10);
console.log(switchItUp(number))