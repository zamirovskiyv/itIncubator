// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
// Task:
// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name
// Example:
// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name


function duckDuckGoose(players, goose) {
    let namePlayer = players[(goose - 1) % players.length];
    return namePlayer.name;
}

let player = [{name:'Player_1'}, {name:'Player_2'}, {name:'Player_3'}, {name:'Player_4'}]

console.log(duckDuckGoose(player, 1))
console.log(duckDuckGoose(player, 3))
console.log(duckDuckGoose(player, 5))