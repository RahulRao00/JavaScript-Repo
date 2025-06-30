

    // function declaration → named function
    function mulThree(num1, num2) {
        return num1 * num2;
    }

    // nested call → pehle (2,3) = 6 → fir (6,4) = 24
    console.log(mulThree(mulThree(2, 3), 4));


    // simple function → +1 karega
    function one(num) {
        return num + 1;
    }

    one(2); // call ho gaya lekin result use nahi kiya


    // function expression → anonymous function variable me store
    const val = function two(num1) {
        return num1 + 2;
    }

    val(2); // call ho gaya
