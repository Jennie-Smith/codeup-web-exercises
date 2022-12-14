"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(colors){
//     if (colors === 'red') {
//         console.log("I love apples!");
//     }
//     else if (colors === 'orange') {
//         console.log("Oranges are pretty good, huh?");
//     }
//     else if (colors === 'yellow'){
//         console.log("I hate sour lemons.");
//     }
//     else if (colors === 'green'){
//         console.log("Kiwi's are delicious!");
//     }
//     else if (colors === 'blue'){
//         console.log("Blueberries are great in pies!");
//     }
//     else if (colors === 'Indigo'){
//         console.log("Blackberries are great in pies!");
//     }
//     else if (colors === 'violet'){
//         console.log("Who would like plums?");
//     }
//     else{
//         console.log("I dont know anything about " + colors);
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// function analyzeColor(colors) {
//     switch(colors) {
//         case 'red':
//             console.log("I love apples!");
//             return "I love apples";
//         case 'orange':
//             console.log("Oranges are pretty good, huh?");
//             return "Oranges are pretty good, huh?";
//         case 'yellow':
//             console.log("I hate sour lemons.");
//             return "I hate sour lemons.";
//         case 'green':
//             console.log("Kiwi's are delicious!");
//             return "Kiwi's are delicious!";
//         case 'blue':
//             console.log("Blueberries are great in pies!");
//             return "Blueberries are great in pies!";
//         case 'indigo':
//             console.log("Blackberries are great in pies!");
//             return "Blackberries are great in pies!";
//         case 'violet':
//             console.log("Who would like plums?");
//             return "Who would like plums?";
//         default:
//             console.log("I dont know anything about " + colors);
//             return "I dont know anything about " + colors;
//     }
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//let input = prompt("What color do you like?");
//alert(analyzeColor(input));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, price){
//     console.log(luckyNumber);
//     if (luckyNumber === 0) {
//         return price;
//     } else if(luckyNumber === 1) {
//         let x = 0.1 * price;
//         return price - x;
//     } else if (luckyNumber === 2) {
//         let x = 0.25 * price;
//         return price - x;
//     } else if(luckyNumber === 3) {
//         let x = 0.35 * price
//         return price - x;
//     } else if(luckyNumber === 4) {
//         let x = 0.5 * price;
//         return price - x;
//     } else if(luckyNumber === 5) {
//         return "It's free!"
//     } else {
//         return "You messed up honey..."
//     }
// }


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// let price = prompt("What is your total bill?");
// alert(calculateTotal(luckyNumber, price));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//trial and error right here:
// function evenOrOdd(inputInt){
//     if (inputInt % 2 === 0) {
//         return "It's Even";
//     } else {
//         return "It's Odd";
//     }
// }
// function plus(inputInt){
//     return inputInt + 100.0;
// }
// function negOrPos(inputInt){
//     let y = Math.sign(inputInt)
//     if (y === 1) {
//         return "Your number is positive";
//     } else if (y === -1) {
//         return "Your number is negative";
//     } else if (y === 0) {
//         return "Technically your number is a positive zero."
//     } else if (y === -0) {
//         return "Technically your number is a negative zero."
//     } else {
//         return "I don't know what your number is."
//     }
// } trial and error stops here.

function catchAll(inputInt) {
    if (inputInt != NaN) {
        return "Hey that's not a number!"
    } else {
        if (inputInt % 2 === 0) {
            alert("It's Even");
        } else {
            alert("It's Odd");
        }
        alert(inputInt + 100.0);

        let y = Math.sign(inputInt);
        if (y === 1) {
            return "Your number is positive";
        } else if (y === -1) {
            return "Your number is negative";
        } else if (y === 0) {
            return "Technically your number is a positive zero."
        } else if (y === -0) {
            return "Technically your number is a negative zero."
        } else {
            return "I don't know what your number is."
        }
    }
}

confirm("Would you like to enter a number?");
let b = prompt("Please enter a number: ");
let inputInt = parseInt(b);
alert(catchAll(inputInt));