

// factory function => function jo object return karta hai

function createRectangle(length, breadth) {
    return rectangle = {
        length: length,
        breadth: breadth,

        draw() {
            console.log("Rectangle is created ....");
        }
    };
}

let isRectangle = createRectangle(5, 6);

// object access (dot notation + bracket notation)
console.log(isRectangle["length"]);
console.log(isRectangle.breadth);
// console.log(isRectangle.draw());




// .................................................................

// Constructor function => new keyword ke saath object create karta hai
// Pascal Case => Rectangle() 
// this => current object ko refer karta hai

function Rectangle() {
    this.length = 1,
    this.breadth = 2,
    this.draw = function () {
        console.log("This is a function which is going to create a rectangle ");
    }
}

// constructor call using new
let rectangleObj = new Rectangle();

console.log(rectangleObj.length);
console.log(rectangleObj.draw());
