/*
 Given a number 'n', return the number of positive odd numbers below 'n'. EASY!

 Examples:
 7   -> 3  (because odd numbers below 7 are [1, 3, 5])
 15  -> 7  (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

 Expect large inputs!
*/

function oddCount(n) {
    let count = 0;
    for (let i = n; i > 0; i--) {
        if (i % 2 === 0) {
            count++;
        }
    }
    return count;
    // or return Math.floor(n / 2);
}

for (let i = 0; i < 3; i++) {
    let number = Math.floor(Math.random() * 100);
    console.log(oddCount(number))
}
