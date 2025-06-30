
// Outer function that creates a private variable 'counter'
function outer() {
    let counter = 5;
    
    // Inner function that increments and returns the counter
    return function increment() {
        counter++;
        return counter;
    }
}


// Call outer, which returns the increment function (a closure)
let counterFunc = outer();

console.log(counterFunc()); // 6
console.log(counterFunc()); // 7
console.log(counterFunc()); // 8
