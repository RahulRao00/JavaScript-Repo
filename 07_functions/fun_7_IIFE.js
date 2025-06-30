
// IIFE(Immediately Invoked Function Expression)--> for the purpose of prevention from the global scope pollution ()()

 
    // Simple IIFE → turant execute hota hai
    (function () {
        console.log("IIFE");
    })();


    // Arrow function IIFE
    (() => {
        console.log("Something is happening in the DB");
    })();

    
    // IIFE with parameter
    ((nameIs) => {
        console.log(`Something is happening in the DB for ${nameIs}`);
    })("Rahul");

