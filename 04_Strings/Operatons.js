

    // trim() => aage-piche ke spaces hataata hai
    let myName = "  something ";
    console.log(myName);
    console.log(myName.trim());


    // replace => specific part ko replace karta hai
    let url = "https://rahul.com/%10Rahul";
    console.log(url.replace("%10", "-"));


    let nameIs = "Rahul rao";


    // case conversion
    console.log(nameIs.toUpperCase());
    console.log(nameIs.toLowerCase());


    // indexOf => first index of character
    console.log(nameIs.indexOf('r'));


    // charAt => specific index ka letter
    console.log(nameIs.charAt(1));

    
    // method chaining => multiple methods in one line
    console.log(nameIs.trim().toUpperCase());
