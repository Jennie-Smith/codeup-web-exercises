"use strict"
// function showMultiplicationTable(){
//     let i = 1;
//     while (i < 11){
//         let x = 7 * i;
//         console.log("7 x " + i + " = " + x);
//         i++;
//     }
// }

//showMultiplicationTable();
//0- 6
// const x = Math.floor(Math.random() * 181) + 20;
// console.log(x);

// function oddEven() {
//     for (let i = 0; i < 10; i++) {
//         const x = Math.floor(Math.random() * 181) + 20;
//         if (x % 2 === 0) {
//             console.log(x + " is even")
//         } else if (x % 2 !== 0) {
//             console.log(x + " is odd");
//         }
//     }
// }
//
// oddEven();

// function nested(){
//     let char = ""
//     for (let i = 1; i <= 9; i++) {
//         for (let a = 1; a <= i; a++) {
//             char += i;
//         }
//         char += "\n";
//     }
//     console.log(char);
// }
//
// nested()

function minusFive(){
    for (let i = 100; i > 0; i -= 5){
        console.log(i)
    }
}

minusFive()
