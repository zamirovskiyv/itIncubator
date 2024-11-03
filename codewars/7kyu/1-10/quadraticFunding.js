/*
 Quadratic Funding:

 Quadratic funding is a way to distribute funds based on quadratic voting. It's a type of crowdfunding
 that prefers projects backed by a larger number of people, even if individual contributions are small.

 Explanation:
 - The funding requires a matching pool (e.g., public fund or corporate donation) and donations by individuals.
 - The received funding for each project is proportional to the square of the sum of the square roots of the individual donations.

 Formula:
 - The weight of a project is calculated as the square of the sum of the square roots of its donations.
 - Example: if donations are [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], then the sum of square roots = 10 and weight = 10^2 = 100.

 Task:
 You will receive:
 1. A list of lists, where each inner list contains donations for a project.
 2. An integer representing the amount of the matching pool.

 Your task is to calculate and return the list of funds received by each project, rounded to the nearest integer.

 Notes:
 - There will always be at least 2 projects, and all amounts will be positive integers.
 - Only round the final results, not intermediate calculations.

 Examples:

 Example 1:
 Project A - donations : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] (10 donations of 1)
 Project B - donations : [10]
 Matching Pool: 20

 Calculations:
 - Project A: weight = 10^2 = 100
 - Project B: weight = (√10)^2 = 10

 Total weights: 100 + 10 = 110
 Funding:
 - Project A: 20 * 100/110 ≈ 18
 - Project B: 20 * 10/110 ≈ 2

 Example 2:
 Project A - donations : [200, 200, 200, 200, 200]
 Project B - donations : [500, 500]
 Project C - donations : [50, 50, ..., 50] (20 donations of 50)
 Matching Pool: 10000

 Calculations:
 - Project A weight = 70.71^2 ≈ 5000
 - Project B weight = 44.72^2 ≈ 2000
 - Project C weight = 141.42^2 ≈ 20000

 Funding received (rounded):
 - Project A: 1852
 - Project B: 741
 - Project C: 7407
*/

function qf(donations, pool) {
    let received;

    const weights = donations.map(projectDonations => {
        const sumOfSqrt = projectDonations.reduce((sum, donation) => sum + Math.sqrt(donation), 0);
        return Math.pow(sumOfSqrt, 2);
    });

    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    received = weights.map(weight => Math.round((weight / totalWeight) * pool));

    return received;
}

console.log(qf([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10]], 20));
console.log(qf([[200, 200, 200, 200, 200], [500, 500], Array(20).fill(50)], 10000));
