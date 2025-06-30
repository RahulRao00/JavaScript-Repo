

// Object de-structure

    const information = {
        name: 'Rahul',
        study: 'graduation',
        currentYear: '2nd',
        college: "AKGEC"
    }

    // currentYear ko 'year' naam se extract kar rahe hain
    const { currentYear: year } = information;

    console.log(year);


// React-style destructuring (props destructure in parameter)
    const navbar = ({ company }) => {
        console.log(company);
    }

    navbar({ company: "Rahul" });


// update object values
    const same = {
        a: "kjwe",
        b: "wejnf"
    }

    console.log(same.a);
    console.log(same.b);

    same.a = "rahul";
    same.b = "about";

    console.log(same.a);
    console.log(same.b);

    function change() {
        console.log(same.a);
    }
    change();


// Error handling with try-catch
    try {
        console.log(nameIs);
    } catch (error) {
        console.log("Wrong input");
    }
