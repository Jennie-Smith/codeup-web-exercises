"use strict"

// function skip(){
//     let y = prompt("Please enter an Odd number:")
//     y
//     for (let i = 1; i < 50; i++){
//         if (y % 2 === 0){
//             prompt(y + " is Even. Please enter an Odd number.");
//             break;
//         } else if (y % 2 !== 0){
//             console.log((i) + " is an odd number");
//             continue;
//         }else if (y == i){
//             console.log(y + " is your number.")
//             continue;
//         }
//
//     }
//
// }
//
// skip()

for(let number = 0; number < 1 || number > 50 || number % 2 ===0 || isNaN(number);) {
    number = parseInt(prompt('enter an odd number between 1 and 50:'))
    if (number > 0 && number < 50 && number % 2 !== 0){
        console.log(`number to skip is: ${number}`);
        console.log(``);
        for (let i = 1; i < 50; i++){
            if (i % 2 === 0){
                continue;
            }else if (i === number) {
                console.log(`yikes! skipping number: ${i}`)
            } else {
                console.log(`here is an odd number: ${i}`);
            }

        }
        break;
    }
}
