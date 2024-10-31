/*
 Write a function that calculates the original product price, without VAT.

 Example:
 If a product's final price (with VAT) is 230.00 and the VAT is 15%,
 the original price would be 200.00 (since 200.00 + 15% = 230.00).

 Function Input and Output:
 - If the input price is 230.00, the function should return 200.00.
 - Round the result to 2 decimal places.
 - If the input value is null, return -1.

 Notes:
 - VAT is always 15% for this Kata.
*/


function excludingVatPrice(price) {
    let res = price === null ? -1 : (price / 1.15).toFixed(2);
    return Number(res);
}

console.log(excludingVatPrice(0))