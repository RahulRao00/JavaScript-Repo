

// Map => unique keys store karta hai aur insertion order bhi maintain karta hai
    const map = new Map();
    map.set('name ',  'Rahul');
    map.set('study',  'Engineering');
    map.set('gender', 'male');
    map.set('name',  'Rahul');   // same key again -> overwrite karega
    console.log(map);

    // for-of => map ke key-value pair par chalega
    for ([key, value] of map) {
        console.log(value);
    }


    let some = [1, 2, 3, 4, 5, 6];

    // map => har element ko double karega
    let double = some.map((ele) => {
        return ele * 2;
    });
    console.log(double);


// Method chaining in map => ek ke baad ek map lagate hain
    let final = some.map((val) => val > 3)
                    .map((val) => val % 2 == 0);

    console.log(final);
