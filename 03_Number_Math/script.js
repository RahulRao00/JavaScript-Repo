
const score = 400;
console.log(score);           // normal number


let balance = new Number(400); // number as object
console.log(balance);


console.log(balance.toString().length); // 3 => "400"
console.log(balance.toFixed(2));        // "400.00" => fixed decimal


const otherNumber = 123.99347;
console.log(otherNumber.toPrecision(3)); // total 3 digits => "124"


const hundred = 100000000;
console.log(hundred.toLocaleString('en-IN')); // "10,00,00,000" => Indian format

// #############################################


// Math object methods
console.log(Math);                  // Math object
console.log(Math.abs(-132.3));      // 132.3 => absolute value
console.log(Math.round(23.54));     // 24 => round off
console.log(Math.max(1, 4, 5, 6, 7)); // max number


// Random number between 1–10
console.log(Math.floor(Math.random() * 10) + 1);
