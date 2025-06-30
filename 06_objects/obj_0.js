

// objects => data ko key-value pair me store karte hain

let car = {
    name: "thar ",
    milage: "30",
    speed: 200,
    color: ["black", "white", "red"],

    prop: function () {
        console.log("This is a function because it's inside an object");
    },

    property: function myFunction() {
        console.log("This is my function");
        return car;

        // ye kabhi execute nahi hoga (return ke baad likha hai)
        more = {
            name: "rao",
        }
    }
};


// object method call
console.log(car.property());


// keys ko JS automatically string me convert karta hai
const obj = {
    1: 'a',
    2: 'b',
    null: "c",
    undefined: "d",
    true: "e"
};
