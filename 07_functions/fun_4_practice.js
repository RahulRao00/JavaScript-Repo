

    // default value agar kuch pass na ho
    function loginUser(name = "Rahul") {
        console.log(name);
    }
    loginUser();            // default
    loginUser("Something"); // user-defined value


// rest operator => baaki sab values ko array me le leta hai
    function user(num1, num2, ...num3) {
        console.log(num1, num2, num3);
    }

    user(1, 2, 3, 4, 6, 5, 6, 7, 8, 9);


// object ko as argument pass karna
    const userInfo = {
        userName: "Rahul",
        price: 20
    }

    function handelObject(anything) {
        console.log(`User name is ${anything.userName} and the price is ${anything.price}`);
    }

    handelObject(userInfo);
