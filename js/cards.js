"use strict"

console.log("Let's play Blackjack!!1");

let myscore = 0;
let computerscore = 0;

console.log(`Your Score: ${myscore} `)
console.log(`Computer Score: ${computerscore} `)

function mainMenu(){
    console.log("MAIN MENU");
    console.log("1. Play Blackjack");
    console.log("2. Exit Game");
    let playerInput = prompt("Please enter 1 or 2:");
    if (playerInput === 1){
        console.log("Yay! Time for BlackJack!");
    } else if (playerInput === 2){
        console.log("Goodbye!");
    }
}

console.log(mainMenu());

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

function shuffle(){
    for(let i = 0; i < 1000; i++){
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let randomCard = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = randomCard;
    }
};

function dealCard(deck) {
    return deck.pop();
}

console.log(getDeck());
let deck1 = getDeck();
shuffle(deck1);
let card = dealCard(deck1);
console.log(card);