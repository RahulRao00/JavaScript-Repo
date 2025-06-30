// Basic comparison operators
let a1 = 20;
let a2 = 200;

console.log(a1 == a2); // false
console.log(a1 === a2); // false (strict check)
console.log(a1 >= a2); // false

if (0) {
  console.log("print the statement");
} else {
  console.log("Else statement"); // 0 is falsy
}

// Special comparisons
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true (null => 0)

// undefined always gives false in number comparisons
console.log(undefined == 0); // false
