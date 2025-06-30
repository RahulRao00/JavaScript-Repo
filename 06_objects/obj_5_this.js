

// this keyword => current context ko refer karta hai
// Browser me yeh window object ko point karta hai

    const information = {
        name: 'Rahul',
        age: 20,

        greeting: function welcome() {
            console.log(`${this.name}, you are warmly Welcome`);
            console.log(this); // poora object print karega
        }
    }

    console.log(information.greeting());   // object method me this => information


    console.log(this);  // browser me => window, Node me => {}

// `````````````````````````````````````````````````````````````````````````

// Normal function me this => global object (not local variable)
    function some() {
        const name = "rahul";
        console.log(this.name);      // undefined
        console.log("hello");
    }

    some();
