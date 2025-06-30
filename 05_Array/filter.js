

// filter => ye new array banata hai sirf un elements se jo condition satisfy karte hain

    let some = [1,2,3,4,5,6,7,8,9,10]

    let ans = some.filter( (val) => val>5 )
    console.log(ans);
    
    const books = [
        {
            title:'book one', type:"friction", publish:'2020'
        },
        {
            title:'book two', type:"Non-friction", publish:'1194'
        },
        {
            title:'book three', type:"history", publish:'1883'
        },
        {
            title:'book four', type:"drama", publish:'2012'
        },
        {
            title:'book five', type:"Psychology", publish:'2004'
        },
        {
            title:'book six', type:"friction", publish:'1999'
        }
    ]

    // friction type ki books
    let ans1 = books.filter( (val) =>  val.type === 'friction')
    console.log(ans1);

    // friction + publish year > 2000
    let ans2 = books.filter( (val) => { return val.publish > 2000 && val.type === 'friction'} )
    console.log(ans2);


    // falsy values ko hata ke sirf truthy bachaenge
    let bool = [1,2,"", null, undefined,  43, NaN, 0, -0, false, true , 0+true ]
    let  truthy = bool.filter(Boolean) 
    console.log(truthy);


// method chaining => ek ke baad ek filters

    let num = [1,2,3,4,5,623,23,56,67]
    let final = num.filter( (val)=> val> 10)
                   .filter( (val)=> val%2 == 0)
            
            console.log(final);
