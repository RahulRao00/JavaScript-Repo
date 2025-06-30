// Primitive Data Types:
// 7 hote hain: String, Number, Boolean, Null, Undefined, BigInt, Symbol

// Primitive types copy by value hote hain (original value ka copy assign hota hai)


// Number
const score = 100;


// Boolean
let ans = true;


// String
let name = "Rahul";


// Null => intentional empty value
let temp = null;


// Undefined => value assign nahi hui abhi tak
let userEmail;


// Symbol => har baar unique value create karta hai, even with same input
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false, kyunki dono alag unique symbols hain

// BigInt => bade numbers ke liye use hota hai (ending with 'n')
const bigNumber = 123456789234567n;
