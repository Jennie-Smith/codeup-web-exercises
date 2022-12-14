"use strict"

let suits = ["clubs", "spades", "diamonds", "hearts"];
let ranks = ["Ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

let deck = new Array();

function getDeck(){
    for(let i = 0; i < suits.length; i++){
        for(let x = 0; x < ranks.length; x++){
            let card = {Rank: ranks[x], Suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
};
console.log(getDeck());

function shuffle(deck){
    for(let i = 0; i < 1000; i++){
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let randomCard = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = randomCard;
    }
};

console.log(getDeck());