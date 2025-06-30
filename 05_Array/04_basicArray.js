

const some = [1, 2, 3, 4, 5, "car", true, "Something"];

// indexOf => element ka index
console.log(some.indexOf(true)); // 6


// includes => element present hai ya nahi
console.log(some.includes(1));   // true

// reverse => array ulta
console.log(some.reverse());

let name1 = "rahul";


// string ko array banao first
let nameArr = name1.split(""); // ['r', 'a', 'h', 'u', 'l']
let dwf = nameArr.splice(1, 4); // ['a', 'h', 'u', 'l']
console.log(dwf);


// agar baaki bacha dekhna ho
console.log(nameArr); // ['r']
