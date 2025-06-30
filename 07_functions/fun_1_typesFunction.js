

// function = JS ka first-class citizen => variable ki tarah treat hota hai
// jo function kuch return nahi karta wo undefined return karta hai

    function myFunction() {
        // function statement
    }

    // anonymous function => bina naam ka function
    // function () {}   (invalid unless used as expression)

    var abcd = (ab) => {
        // fat arrow function with param
    }
    abcd(12);


    a => {
        // single param arrow function (no parentheses needed)
    }


    () => {
        return;
    }


    // implicit return → parentheses ke bina return keyword likhne ki zarurat nahi
    const addTwo = (num1, num2) => (num1 + num2);
    console.log(addTwo(2, 3));


    // object return → curly braces me wrap karo
    const add = (num1, num2) => ({ username: "hitesh" });


// ...........................................................................

    function connectToServer() {
        console.log("server is connecting ");
        setTimeout(function () {
            console.log("Connected to server ");
        }, 3000);
    }
// connectToServer();


// ...........................................................................

    function sum(a, b) {
        // arguments object → function me pass hua ha
    }