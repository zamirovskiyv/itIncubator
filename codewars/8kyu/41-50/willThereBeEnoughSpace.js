/*
 The Story:
 Bob is a bus driver who has become very popular in the city. With so many passengers
 wanting to get on his bus, sometimes he faces the issue of not having enough space
 left for everyone.

 Task Overview:
 Write a function that takes three parameters:
 - cap: the maximum number of people the bus can hold, excluding the driver.
 - on: the current number of people on the bus, excluding the driver.
 - wait: the number of people waiting to board the bus, excluding the driver.

 Return:
 - If there is enough space for all waiting passengers, return 0.
 - If there isn’t enough space, return the number of passengers who can’t fit.

 Examples:
 cap = 10, on = 5, wait = 5   --> 0  (All waiting passengers can fit)
 cap = 100, on = 60, wait = 50 --> 10 (Only 40 of the 50 waiting can fit)
*/

function enough(cap, on, wait) {
    let pass = cap - on - wait;
    return pass >= 0 ? 0: (-1 * pass);
}

console.log(enough(10, 5, 5))
console.log(enough(100, 60, 50))