
    // clone array using spread
    // let arr = ["Rahul", "Gaurav", "Prashant"];
    // let brr = [...arr];
    // brr.push("Rao");
    // console.log(arr);
    // console.log(brr);

    const hero = ["IronMan", "Thor", "Hulk"];
    const hero2 = ["CaptainAmerica", "SpiderMan", "Batman"];
    const hero3 = ["Flash", "Loki", "Deadpool"];


    // spread operator => combine multiple arrays
    const allHero2 = [...hero, ...hero2, ...hero3];
    // console.log(allHero2);


    // flat() => nested array ko single level tak todta hai
    const anotherArr = [1, 2, 3, [4, 5, 6, [3, 4, 5, 6], 5, 7]];
    // console.log(anotherArr.flat(Infinity));


    // Array.from() => string ya object ko array me convert karta hai
    const nameIs = "Rahul";
    console.log(Array.from(nameIs));            // ['R', 'a', 'h', 'u', 'l']
    console.log(Array.from({ name: 'rahul' })); // ❌ returns []

    
    // Array.of() => values se array banata hai
    let score1 = 10;
    let score2 = 20;
    let score3 = 30;
    console.log(Array.of(score1, score2, score3)); // [10, 20, 30]
