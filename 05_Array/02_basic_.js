

    // let arr = [2, 4, 6, 7, 3, 4, 6, 7];
    // console.log(arr.length);

    // even elements print karo
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 == 0) {
    //         console.log("Even ages are " + arr[i]);
    //     }
    // }

    let firstName = ["rahul", "tushar", "trump", "priya", "mayank"];
    let gender = ["male", "male", "male", "female", "male"];

    for (let i = 0; i < firstName.length; i++) {
        if (gender[i] == "male") {
            console.log(`${firstName[i]} = ${i}`);
        }
    }
