// Description:
// Our football team has finished the championship.
//
// Our team's match results are recorded in a collection of strings.
// Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number
// of points our team (x) got in the championship by the rules given above.
//
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let x, y;
    let schet;
    let count = 0;
    for (let i = 0; i < games.length; i++) {
        schet = games[i];
        x = Number(schet[0])
        y = Number(schet[2])

        if (x > y) {
            count = count + 3
        } else if (x === y) {
            count = count + 1
        }
        console.log(games[i]);
    }

    return count;
}

let match1 = ["3:1", "2:2", "0:1"]
console.log(points(match1))

// function points(games) {
//     let count = 0;
//     for (let i = 0; i < games.length; i++) {
//         let [x, y] = games[i].split(':').map(Number);
//
//         if (x > y) {
//             count += 3;
//         } else if (x === y) {
//             count += 1;
//         }
//     }
//
//     return count;
// }
