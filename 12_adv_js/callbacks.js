

// Function 'sum' takes two numbers and a callback function 'show'

function sum(a, b, show) {
    let result = a + b;
    // Call the callback function with the result
    show(result);
}

// Callback function to display the result
function displaySum(data) {
    console.log(`The sum is ${data}`);
}

// Calling sum with numbers and the callback function
sum(1, 2, displaySum);
