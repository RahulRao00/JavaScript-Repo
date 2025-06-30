let color = "green";

if (color == "red") {
  console.log("Stop Now"); // red => stop
} else if (color == "yellow") {
  console.log("Ready to go"); // yellow => wait
} else {
  console.log("Go now"); // green or others => go
}

// ----------------------------

if (true) {
  console.log("true"); // always true
} else {
  console.log("false");
}

// Nullish Coalescing Operator (??) => null ya undefined ho toh right wali value lega
let val1;
// val1 = 5 ?? 10;           // 5
// val1 = null ?? 10;        // 10
val1 = null ?? undefined; // undefined
// val1 = undefined ?? 15 ?? 20;  // 15

console.log(val1);
