/*
 Task:
 Write a function that converts miles per imperial gallon (mpg) to kilometers per liter (kpl).

 Conversion Details:
 - 1 Mile = 1.609344 kilometers
 - 1 Imperial Gallon = 4.54609188 liters
 - Use these conversions to calculate kpl from mpg.

 Output:
 - The result should be accurate to within 0.01 kpl (rounded to two decimal places).

 Formula:
 kpl = (mpg * 1.609344) / 4.54609188

 Examples:
 Input: 10 mpg
 Output: 3.54 kpl

 Input: 25 mpg
 Output: 8.83 kpl

 Notes:
 - Ensure the function handles typical input values correctly.
 - Return the result rounded to two decimal places.
*/


function converter (mpg) {
    let res= ((mpg * 1.609344) / 4.54609188).toFixed(2)
    return Number(res)
}

console.log(converter(10))
console.log(converter(25))