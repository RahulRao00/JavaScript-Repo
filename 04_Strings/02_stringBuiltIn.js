

let nameIs = "Rahul, Rao";


// ✅ slice() => substring nikalne ke liye, negative bhi allowed
console.log(nameIs.slice(0, 4));   // "Rahu" => 0 to 3
console.log(nameIs.slice(0));      // pura string
console.log(nameIs.slice(-3));     // last 3 characters => "Rao"


// ✅ split() => string ko array me convert karta hai (based on separator)
let arr = nameIs.split(", "); // split at comma+space
console.log(arr);             // ["Rahul", "Rao"]


// ✅ for-of => string ke characters iterate karne ke liye
for (let ele of nameIs) {
  console.log(ele);           // R, a, h, u, l, ,,  , R, a, o
}


// New useful string methods 👇

// replaceAll() => multiple occurrences ko replace karta hai
let msg = "hello hello world";
console.log(msg.replaceAll("hello", "hi")); // "hi hi world"


// charAt() => specific position ka character
console.log(nameIs.charAt(0)); // "R"


// endsWith() => string kis se end ho raha hai
console.log(nameIs.endsWith("Rao")); // false (space ke wajah se)


// startsWith() => string kis se start ho raha hai
console.log(nameIs.startsWith("Rahul")); // true
