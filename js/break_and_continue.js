"use strict"

function skip(){
    let y = prompt("Please enter an Odd number:")
    y
    for (let i = 1; i < 50; i++){
        if (y % 2 === 0){
            prompt(y + " is Even. Please enter an Odd number.");
            break;
        } else if (y == i){
            console.log(y + " is your number.")
            continue;
        } else {
            console.log(i + " is an odd number");
        }

    }

}

skip()