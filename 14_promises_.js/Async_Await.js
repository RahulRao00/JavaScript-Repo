/**
 * To use await, the function must be declared async.
 * Callback, Promise (.then), and async-await all handle async operations.
 */

let some = function() {
    console.log("This is the basic function");

    // Create and return a Promise that resolves after 3 seconds
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve("Hi There");
        }, 3000);
    });
}

async function main() {
    // Wait for the Promise returned by some() to resolve
    let ans = await some();
    console.log("inside main");
}

main();

console.log("after main");
