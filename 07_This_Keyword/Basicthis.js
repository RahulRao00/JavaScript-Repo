

    "use strict";  // Strict mode → safer code, avoids common JS mistakes

    // In Node.js → global context me `this` is {}
    console.log(this);  // => {}

    function some() {
        // strict mode me 'this' is undefined inside a regular function
        let a = 10;
        console.log(this.a);  // => undefined
    }
    some();

    // Object context me `this` properly work karta hai
    const obj = {
        a: "10",
        b: "23",
        print() {
            console.log(this.a);  // => "10"
        }
    };
    obj.print();

