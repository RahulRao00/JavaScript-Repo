

// reduce => array ke sabhi values ko ek single result me reduce karta hai

    let arr = [1, 2, 3, 4];

    const myTotal = arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    console.log(myTotal);

    // arrow function version
    const arrFun = arr.reduce((acc, cur) => acc + cur, 0);
    console.log(arrFun);


    const soppingCart = [
        {
            item: 'js Course',
            prise: 9999
        },
        {
            item: ' py',
            prise: 5999
        },
        {
            item: 'DSA',
            prise: 4999
        },
        {
            item: 'data science course',
            prise: 12999
        },
    ];

    // total cost calculate using reduce
    let sum = soppingCart.reduce((acc, item) => acc + item.prise, 0);
    console.log(sum);
