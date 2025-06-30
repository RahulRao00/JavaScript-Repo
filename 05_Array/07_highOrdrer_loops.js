

// for-of => mainly string ya iterable types ke liye
let character = "Rahul Rao";
for (char of character) {
    console.log(char);
}



// forEach => arrays ke liye, callback ke through
let arr = [1, 2, 3, , 4, 5, 6];
arr.forEach((val) => {
    console.log(val);
});
