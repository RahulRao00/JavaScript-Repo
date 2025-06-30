// Loops => repeat karne ke liye (for, while, do-while, for-of, for-in, forEach)

// 1. For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop: ", i);
}

// 2. While loop
let j = 1;
while (j <= 3) {
  console.log("While loop: ", j);
  j++;
}


// 3. Do-While loop
let k = 1;
do {
  console.log("Do-While loop: ", k);
  k++;
} while (k <= 3);


// 4. For-Of loop => arrays ke liye
const arr = [10, 20, 30];
for (const num of arr) {
  console.log("For-Of loop: ", num);
}


// 5. For-In loop => objects ke liye
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`For-In loop: ${key} = ${obj[key]}`);
}


// 6. forEach loop => array method
arr.forEach((value, index) => {
  console.log(`forEach loop [${index}] = ${value}`);
});

