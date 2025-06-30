

// object cloning --> ek object ki values dusre me copy karna

// 1: Iteration method (manual copy)
    let src = {
        a: 10,
        b: 20,
        c: 30,
    }

    let dest = {};
    for (let key in src) {
        console.log(key);
        dest[key] = src[key];
    }

    console.log(dest);


// 2: Object.assign(target, source)
    let anotherDest = Object.assign({}, src);  // {} important hai
    console.log(anotherDest);

    
// 3: Spread operator (...) --> short syntax
    let nestDest = { ...src };
    console.log(nestDest);
