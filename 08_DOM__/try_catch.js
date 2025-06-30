

    // Try-catch block handles error if 'some' is accessed before declaration
    try {
        console.log(some); // ReferenceError: Cannot access 'some' before initialization
    } catch (error) {
        console.log(`Variable 'some' is not defined: ${error}`);
        console.log(error.name);      // ReferenceError
        console.log(error.message);   // Cannot access 'some' before initialization
    }


    // ✅ Arrow function
    const some = () => {
        console.log("Function 'some' is now defined and executed.");
    };
    some();


    // ✅ Arrow function with one parameter
    const some1 = n => {
        console.log("Value passed to some1:", n);
    };
    some1(42);


    // ✅ setTimeout: runs code once after 10 seconds (10000ms)
    setTimeout(() => {
        console.log("Timeout executed after 10 seconds");
    }, 10000);


    // ✅ setInterval: runs code every 2 seconds (2000ms)
    setInterval(() => {
        console.log("Interval running every 2 seconds");
    }, 2000);

