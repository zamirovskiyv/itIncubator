// Example:
let num1= 5.5589 // is rounded 5.56
let num2 =-3.3424 //is rounded -3.34

function twoDecimalPlaces(n) {
    // n.toFixed(2) преобразует число в строку с двумя знаками после запятой.
    // Оборачивание результата в Number() преобразует эту строку обратно в число.
    return Number(n.toFixed(2));
}

console.log(twoDecimalPlaces(num1))
console.log(twoDecimalPlaces(num2))
