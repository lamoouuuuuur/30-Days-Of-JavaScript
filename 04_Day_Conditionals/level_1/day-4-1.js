console.log("#1");
let age = +prompt("Enter your age: ", 0);
if (age >= 18) {
    alert("You are old enough to drive");
} else {
    alert(`You are left with ${18 - age} years to drive`);
}

console.log("#2");
let myAge = +prompt("My age: ", 0);
let yourAge = +prompt("Your age: ", 0);
if (myAge > yourAge) {
    alert(`I am ${myAge - yourAge} years older than you`);
} else {
    alert(`You are ${yourAge - myAge} years older than me`);
}

console.log("#3");
let a = +prompt("Enter a: ", 0);
let b = +prompt("Enter b: ", 0);

if (a > b) {
    alert(`${a} is greater than ${b}`);
} else {
    alert(`${a} is less than ${b}`);
}

console.log("#4");
let num = +prompt("Enter the number: ", 0);
if (num % 2 === 0) {
    alert(`${num} is an even number`);
} else {
    alert(`${num} is an odd number`);
}