let a = 97;
let nameIs = "97";

console.log(a == nameIs); // value check only (true)
console.log(a === nameIs); // value + type check (false)

console.log("21" != 21); // value check (false)
console.log("21" !== 21); // strict check (true)

// Prompt/Alert => only for browser use

// let input = prompt("Enter something : ");
// console.log(input);

// var firstName = prompt("Enter Your first name : ");
// var lastName = prompt("Enter your last name : ");
// alert(`Your name is ${firstName + " " + lastName} ok!`);
