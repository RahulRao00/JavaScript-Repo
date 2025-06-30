

// Spread inside spread => error aayega, nested spread allowed nahi
// let someArr = [[1, 2], [1, 2], [3, 4]];
// console.log(...(...someArr)); 



// Rest parameter => pehle fixed param, baad me ...rest
// let a = [1,2,3,4,5,6]
// function arr1(b, ...a){
//     console.log(a);  // [8,9,10,11]
// }
// arr1(3, 8, 9, 10, 11)


let data = {
  name: "Rahul",
};


// delete => sirf object ke property ko delete karta hai

console.log(delete data.name); // true
console.log(delete data); // false (variables delete nahi hote)


// Array bhi object hota hai
let some = [1, 2, 3, , 4, 5];
console.log(delete some); // false


// Logical OR => first truthy value return karega
let variable = false || {} || null;
console.log(variable); // {} (first truthy)
