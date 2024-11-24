/*
 Write a function 'bmi' that calculates the Body Mass Index (BMI), using the formula:
 bmi = weight / height^2

 Based on the calculated BMI, return the corresponding weight category:
 - if bmi <= 18.5, return "Underweight"
 - if bmi <= 25.0, return "Normal"
 - if bmi <= 30.0, return "Overweight"
 - if bmi > 30, return "Obese"
*/

function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5) return "Underweight";
    if (bmi <= 25.) return "Normal";
    if (bmi <= 30) return "Overweight";
    if (bmi > 30) return "Obese";
}

let weight = 75;
let height = 178;

console.log(bmi(weight, height));