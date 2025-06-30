

    // Higher Order Function → ek function ko argument me le raha hai
    // aur ek function return bhi kar raha hai
    
    function multipleGreet(fun, val) {
        for (let i = 0; i < val; i++) {
            fun();  // function ko bar-bar call kiya
        }

        // anonymous arrow function return ho raha hai
        return () => {
            console.log("This is returning a function from another function");
        };
    }


    // ek simple greet function
    let greet = function () {
        console.log("hello gi");
    }


    // function pass kar diya → greet ke saath 10 baar call hoga
    let anotherGreet = multipleGreet(greet, 10);

    // ab ye returned function ko call kar rahe hain
    anotherGreet();
