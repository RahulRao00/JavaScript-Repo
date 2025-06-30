

  // factory function --> ek function jo object return karta hai

  function createRectangle() {        // function define hua
      return rectangle = {            // object return ho raha hai
          length: 2,
          breadth: 3,

          draw() {
              console.log("Rectangle is created ....");
              return;
          },
      };
  }
  

  let isRectangle = createRectangle();
  console.log(isRectangle.length);
  console.log(isRectangle.draw());
