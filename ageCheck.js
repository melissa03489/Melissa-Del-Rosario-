//if statement activity 
let age = prompt("Enter your age:");
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}


//if else if activity 
let score = prompt("Enter your score:");
if (score >= 90) {
  console.log("Your grade is: Excellent.");
} else if (score >= 80 && score <= 89) {
  console.log("Your grade is: Good.");
} else if (score >= 70 && score <= 79) {
  console.log("Your grade is: Fair.");
} else {
  console.log("Your grade is: Needs Improvement.");
}

// switch statement activity 
// Prompt the user to enter a day of the week
const day = prompt("Enter a day of the week:Monday");
// Use a switch statement to map each day to a specific task to ensure the input is case-insensitive.
switch (day.toLowerCase()) {
  case "monday":
    console.log("Your task for Monday is: Finish assignments.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: Attend a class.");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: washing clothes.");
    break;
  case "thursday":
    console.log("Your task for Thursday is: FReview notes.");
    break;
  case "friday":
    console.log("Your task for Friday is: Summary reviewer.");
    break;
  case "saturday":
    console.log("Your task for Saturday is: Take a break.");
    break;
  case "sunday":
    console.log("Your task for Sunday is: Working day.");
    break;
  default:
    console.log("Finish assignments.");
}

// while loop activity 
for (let a = 1; a <= 10; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}
