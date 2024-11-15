/*
 Task:
 Write a function that calculates the respective ages of a cat and a dog in "animal years"
 based on the given number of human years.

 Rules:
 - The function should return an array [humanYears, catYears, dogYears].
 - humanYears >= 1 and are whole numbers only.

 Cat Years:
 - 15 cat years for the first year.
 - +9 cat years for the second year.
 - +4 cat years for each additional year after the second.

 Dog Years:
 - 15 dog years for the first year.
 - +9 dog years for the second year.
 - +5 dog years for each additional year after the second.

 Examples:
 Input: 1  --> Output: [1, 15, 15]
 Input: 2  --> Output: [2, 24, 24]
 Input: 5  --> Output: [5, 36, 39]

 References:
 - Cat years: http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
 - Dog years: http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
*/



var humanYearsCatYearsDogYears = function (humanYears) {
    let res = []
    let catYears = 0;
    let dogYears = 0;

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
        res.push(humanYears, catYears, dogYears)
    } else if (humanYears === 2) {
        catYears = 15+9;
        dogYears = 15+9;
        res.push(humanYears, catYears, dogYears)
    } else {
        catYears = 15+9+4*(humanYears-2);
        dogYears = 15+9+5*(humanYears-2);
        res.push(humanYears, catYears, dogYears)
    }
    return res;
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(5));