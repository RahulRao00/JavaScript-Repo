// Reference (Non-Primitive) Types: Array, Object, Function

// Non-Primitive types copy by reference hote hain
// Agar kisi ek jagah value change karein, toh original bhi change ho jaata hai

// Array
const names = ["Thor", "CaptainAmerica", "Hulk", "SpiderMan", "IronMan"];

// Object => Key-value pairs hote hain
let myObj = {
  name: "Rahul",
  age: 20,
};

// Function => typeof se check karo toh "function" hi aayega
const myFunction = function () {
  console.log("Hello World");
};

// ######################################################################

// Stack vs Heap Memory

// Primitive types => Stack memory (copy hota hai)
let nameIs = "kucch Bhii";
let myName = nameIs;
myName = "Rahul Rao";


console.log(nameIs); // "kucch Bhii"
console.log(myName); // "Rahul Rao"


// Reference types => Heap memory (original ka reference pass hota hai)
let user1 = {
  userEmail: "something@gmail.com",
  password: 12345,
};

let user2 = user1; // yeh reference copy karega, actual object nahi
user2.password = 0; // change karein toh original bhi update hota hai

console.log(user1.password); // 0 => original value changed
console.log(user2.password); // 0 => same object ko point kar rahe hain
