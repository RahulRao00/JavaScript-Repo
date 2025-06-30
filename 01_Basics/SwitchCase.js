let color = "red";

switch (color) {
  case "red":
    console.log("stop"); // red => stop
    break;

  case "yellow":
    console.log("ready"); // yellow => wait
    break;

  case "green":
    console.log("go"); // green => go
    break;

  default:
    console.log("Wrong input"); // if no case matches
    break;
}

let day = "1";

switch (day) {
  case "1":
    console.log("Monday");
    break;

  case "2":
    console.log("Tuesday");
    break;

  case "3":
    console.log("Wednesday");
    break;

  case "4":
    console.log("Thursday");
    break;

  case "5":
    console.log("Friday");
    break;

  case "6":
    console.log("Saturday");
    break;

  case "7":
    console.log("Sunday");
    break;

  default:
    console.log("Wrong input"); // agar 1-7 ke alawa kuch ho
}
