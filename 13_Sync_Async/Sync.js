/**
 * Synchronous -> single thread -> one task at a time
 */

function sumIs(data) {
    let sum = 0;
    for (let i = 0; i <= data; i++) {
        sum += i;
    }
    return sum;
}


function ans() {
    console.log(sumIs(5));

}


// Schedule ans() to run after 1 second (asynchronous)
setTimeout(ans, 1000);


// This logs immediately before ans() executes
console.log("qjhvwd");
