

// Constructor function
// this => current object ke context ko refer karta hai

    function Rahul() {

        this.firstName = "rahul",
        this.lastName = "rao",
        this.age = 20,
        this.height = "5'10"
    }

    let property = new Rahul();

    console.log(property.lastName);             // direct access
    console.log(property.constructor);          // instance constructor (returns function)
    console.log(Rahul.constructor);             // Function constructor (Function itself)


// object ke andar loop
    for (let key in property) {
        console.log(key, property[key]);
    }


// check key exists or not
    if ('color' in property) {
        console.log("present");
    } else {
        console.log("Not present");
    }
