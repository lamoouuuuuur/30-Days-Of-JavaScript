console.log("#1");
let grade = +prompt("Enter your grade: ", 0);

if (grade >= 90 && grade <= 100) {
    alert("Your grade is A");
} else if (grade >= 70 && grade <= 89) {
    alert("Your grade is B");
} else if (grade >= 60 && grade <= 69) {
    alert("Your grade is C");
} else if (grade >= 50 && grade <= 59) {
    alert("Your grade is D");
} else if (grade >= 0 && grade <= 49) {
    alert("Your grade is F");
}

console.log("#2");
let month = prompt("Enter month: ", "");
if (month === "September" || month === "October" || month === "November") {
    alert("Autumn");
} else if (month === "December" || month === "January" || month === "February") {
    alert("Winter");
} else if (month === "March" || month === "April" || month === "May") {
    alert("Spring");
} else if (month === "June" || month === "July" || month === "August") {
    alert("Summer");
}

console.log("#3");
let day = prompt("Enter name of day: ", "");
if (day.match(/monday/i)) {
    alert("Monday is working day");
} else if (day.match(/tuesday/i)) {
    alert("Tuesday is working day");
} else if (day.match(/wednesday/i)) {
    alert("Wednesday is working day");
} else if (day.match(/thursday/i)) {
    alert("Thursday is working day");
} else if (day.match(/friday/i)) {
    alert(`Friday is a working day`);
} else if (day.match(/saturday/i)) {
    alert("Saturday is a weekend");
} else if (day.match(/sunday/i)) {
    alert("Sunday is a weekend");
}
