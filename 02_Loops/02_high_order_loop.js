
// Loops => repeat karne ke liye (for, while, do-while, for-of, for-in, forEach)


// 1. For loop => fixed count ke liye
for (let i = 1; i <= 3; i++) {
  console.log("For loop:", i);
}

// 2. While loop => condition based
let j = 1;
while (j <= 3) {
  console.log("While loop:", j);
  j++;
}


// 3. Do-While loop => pehle ek baar chalega, phir check hoga
let k = 1;
do {
  console.log("Do-While loop:", k);
  k++;
} while (k <= 3);


// 4. For-Of loop => array values ke liye
const arr = [10, 20, 30];
for (const num of arr) {
  console.log("For-Of loop:", num);
}


// 5. For-In loop => object ke keys ke liye
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`For-In loop: ${key} = ${obj[key]}`);
}



// 6. forEach loop => array me directly function apply karta hai
arr.forEach((value, index) => {
  console.log(`forEach loop [${index}] = ${value}`);
});
