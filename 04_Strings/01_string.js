

let nameIs = "   Rahul Rao";
console.log(nameIs); // with spaces


// Template literal
console.log(`My name is ${nameIs} and I am a Student of Engineering`);


// trim() => aage piche ke spaces hata deta hai
console.log(nameIs.trim());
console.log(nameIs); // original string unchanged (strings are immutable)


// String as object
const firstName = new String("Rahul ");
const lastName = new String("Rao");


console.log(`My name is ${firstName + lastName}`); // string concat

let upper = firstName.toUpperCase(); // uppercase me convert
console.log(upper);


// 🆕 New useful string methods 👇

// length => total characters (including spaces)
console.log(nameIs.length);


// indexOf => kisi character ya word ka first index 
console.log(nameIs.indexOf("Rao")); // 8 (space bhi count hota hai)


// slice => string ka portion nikaalna
console.log(nameIs.trim().slice(0, 5)); // "Rahul"


// replace => ek word ko dusre se replace karna
let sentence = "My name is Rahul";
console.log(sentence.replace("Rahul", "Amit"));


// includes => check karta hai koi word ya letter present hai ya nahi
console.log(sentence.includes("Rahul")); // true
