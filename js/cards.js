"use strict"

let deck = [
    {
        rank: {
            ace: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10,
            jack: 11,
            queen: 12,
            king: 13
        },

        suit: {
            clubs: 'clubs',
            spades: 'spades',
            hearts: 'hearts',
            diamonds: 'diamonds',
        }
    },
    // author: {
    //     firstName: 'Samantha',
    //     lastName: 'Shannon',
];

console.log(`${deck[0].rank.two} of ${deck[0].suit.spades}`);
