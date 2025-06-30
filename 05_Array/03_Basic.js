

let arr = [2, 4, 5, 6, "Rahul", true];
console.log(arr.length);

// simple for loop
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

// changing value in array (mutable)
const arr1 = [2, 5, 8, 9];
arr1[1] = 12;
console.log(arr1);


// sum of elements
const marks = [10, 20, 30, 40, 50, 60];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log(sum);


// forEach => har element pe kaam kare
marks.forEach(function (val) {
    console.log(val);
});
