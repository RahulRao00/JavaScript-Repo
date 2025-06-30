a = 20;
b = 4;

console.log(a % 3); // remainder (20 % 3 = 2)
console.log(3 ** 2); // exponent (3^2 = 9)
console.log(0 / 0); // NaN (undefined math)

let hindi = 20;
let math = 200;
let eng = 100;

const avg = (hindi + math + eng) / 3;
console.log(avg); // average of marks

console.log('This is a valid "String" ');
console.log("Rahul ", "Rao", 2 + 2, true, 2 * 3, 3 % 2);

// Template Literals
console.log(`The sum is ${hindi + math} ok!`);

let input = "wpple";
if (input[0] == "a" && input.length > 3) {
  console.log("This is a good string");
} else {
  console.log("Not a good String");
}

// setTimeout => run after 3 seconds
setTimeout(() => {
  console.log("Time is Delayed by three seconds!");
}, 3000);
