
// Async/Await approach (uncomment to use)
/*
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
getData();
*/


// Promise chaining approach
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data[0].id);
        console.log(data[0].name);
        console.log(data[0].username);
        console.log(data[0].address.street);
    })
    .catch(error => {
        console.error("Error:", error);
    });
