

    // `this` points to the current object (obj)
    let obj = {
        a: "12",
        b: 12,
        fxn: function () {
            console.log(this);  // => refers to the obj itself
        }
    };

    obj.fxn();  // Outputs the whole obj

