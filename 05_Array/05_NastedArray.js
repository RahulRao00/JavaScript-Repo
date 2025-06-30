
// multidimensional array (array of arrays)
let nestedArr = [[1, 2], [3, 4], [5, 6], [7, 8]];
// console.log(nestedArr[0]);
// console.log(nestedArr[0][0]);

let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
// console.log(game);

let num = [10, 20, 30, 40, 50, 60];

// for-of loop
for (let val of num) {
    console.log(val);
}

// forEach => callback function ke through
num.forEach(marks => console.log(marks));

// join => array to string with separator
console.log(num.join(', '));

// split => string to array
let some = "this is my first String";
console.log(some.split(" "));

// map => ek ek element pe operation karne ke liye
num.map(function (val) {
    console.log(val);
});
