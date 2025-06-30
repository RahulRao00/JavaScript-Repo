

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // Simulate success or failure
            if (success) {
                resolve({ name: "Rahul", age: 20 });
            } else {
                reject("Failed to resolve");
            }
        }, 2000);
    });
}


// Calling the fetchData function and handling the promise
fetchData()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
