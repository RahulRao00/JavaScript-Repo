

// Import the file system module
const fs = require("fs");


// Asynchronously read the file 'some.txt' with utf-8 encoding
fs.readFile("some.txt", "utf-8", (err, data) => {
    if (err) {
        // Log error message if reading fails
        console.error(`Error during reading the file: ${err.message}`);
        return;
    }
    // Log the file content if reading succeeds
    console.log(data);
});


// This executes immediately without waiting for the file read to complete
console.log("This executes first");
