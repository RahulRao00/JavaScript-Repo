

let str1 = "Rahul";
let str2 = "Rao";
console.log(str1 + " " + str2); // string concatenation


// Type conversion based on first value
console.log(1 + "2");       // "12"
console.log("1" + "2");     // "12"
console.log("1" + 2);       // "12"
console.log("1" + 2 + 2);   // "122"
console.log(1 + "2" + 2);   // "122"
console.log(1 + 2 + "2");   // "32"


let gameCounter = 100;
console.log(gameCounter++);  // prints 100, then increments to 101
console.log(++gameCounter);  // increments first, then prints 102


let increment = gameCounter++;
console.log(increment);      // 102 (original), gameCounter now 103
