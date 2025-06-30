

let d = new Date();

console.log(d.toString()); // full date string
console.log(d.toISOString()); // ISO format
console.log(d.toDateString()); // only date
console.log(d.toJSON()); // JSON date format
console.log(d.toLocaleString()); // local date & time


// Custom date: (year, month[0-based], day, hour, minute)
let myDate = new Date(2025, 2, 15, 4, 5);
console.log(myDate.toDateString()); // "Sat Mar 15 2025"


// From string input
let newDate = new Date("02-01-2025");
console.log(newDate.toTimeString()); // only time
console.log(newDate.getTime()); // timestamp in ms


// Current timestamp in ms
let time = Date.now();
console.log(time);


// Formatted date string with weekday and full time
console.log(
    d.toLocaleString("default", {
        weekday: "long",
        timeStyle: "full",
    })
);
