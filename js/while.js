"use strict"

// let i = 1;
//
// while (i <= 7000) {
//     console.log(i);
//     i += i;
// }


var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


let i = 50;

do {
    let cones = Math.floor(Math.random() * 5) + 1;
    console.log(cones + " cones sold. We have " + (i  - cones)+ " left.");
    i -= cones;
    i += 1;
    i--;
} while (i >= 1);

console.log("No more cones. I can't sell you what you asked.")