

    // let & const => block scope hota hai 
    // var => function scope ya global scope me chala jata hai

    if (true) {
        let a = 10;
        const b = 20;
        var c = 30;  // sirf yeh bahar access hoga
    }

    // console.log(a);  not accessible
    // console.log(b);  not accessible
    // console.log(c);  accessible (var = function/global scope)


// Dice roll karne ka function

    let num = function roleDice() {
        const val = Math.round(Math.random() * 5 + 1); // 1 se 6 ke beech
        console.log(val);
    }

    num(); // dice roll karo
