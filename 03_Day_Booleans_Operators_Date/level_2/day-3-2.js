console.log("#1");
let base = +prompt("Enter base:", 0);
let height = +prompt("Enter height:", 0);
console.log(`The area of the triangle is ${0.5 * base * height}`);

console.log("#2");
let a = +prompt("Enter side a: ", 0);
let b = +prompt("Enter side b: ", 0);
let c = +prompt("Enter side c: ", 0);
console.log(`The perimeter of the triangle is ${a + b + c}`);

console.log("#3");
let length = +prompt("Length: ", 0);
let width = +prompt("Width: ", 0);
console.log(`Perimeter: ${2 * (length + width)}`);
console.log(`Area: ${length * width}`);

console.log("#4");
const pi = 3.14;
let r = +prompt("Radius: ", 0);
console.log(`Area: ${pi * r * r}`);
console.log(`Circumference: ${2 * pi * r}`);

console.log("#5");
let x = +prompt("Enter x: ", 0);
console.log(`y = ${2 * x - 2}`);

console.log("#6, 7");
const x1 = 6;
const x2 = 2;
const y1 = 10;
const y2 = 2;
let m = (y2 - y1) / (x2 - x1);
console.log(m);

console.log("#8");
let x_value = +prompt("x = ", 0);
console.log(`y = ${x_value * x_value + 6 * x_value + 9}`);

console.log("#9");
let hours = +prompt("Enter hours: ", 0);
let rate_per_hour = +prompt("Enter rate per hour: ", 0);
console.log(`Your weekly earning is ${hours * rate_per_hour}`);

console.log("#10");
let name = prompt("Enter your name: ", "");
let res_1 = name.length > 7 ? "Your name is long" : "Your name is short";
console.log(res_1);

console.log("#11");
let firstName = prompt("Enter your name: ", "");
let lastName = prompt("Enter your surname", "");
let res_2 = firstName.length > lastName.length ? `Your first name, ${firstName} is longer than your family name, ${lastName}` : "Nothing";
console.log(res_2);

console.log("#12");
let myAge = +prompt("My age is: ", 0);
let yourAge = +prompt("Your age is ", 0);
let res_3 = myAge > yourAge ? `I am ${myAge} years older than you` : "Nothing";
console.log(res_3);

console.log("#13");
let today = new Date();
let birth_year = +prompt("Enter birth year: ", 0);
let diff = today.getFullYear() - birth_year;
let res_4 = diff >= 18 ? `You are ${diff}. You are old enough to drive` : `You are ${diff}. You will be allowed to drive after ${18 - diff} years`;
console.log(res_4);

console.log("#14");
let yearsOld = +prompt("Enter number of years you live: ", 0);
console.log(`You lived ${yearsOld * 60 * 60 * 24 * 365} seconds`);

console.log("#15");
let now_time = new Date();
console.log(
    `${now_time.getFullYear()}-0${now_time.getMonth() + 1}-${now_time.getDate() + 1} ${now_time.getHours()}:0${now_time.getMinutes()}`
);

console.log(
    `${now_time.getDate() + 1}-0${now_time.getMonth() + 1}-${now_time.getFullYear()} ${now_time.getHours()}:0${now_time.getMinutes()}`
);

console.log(
    `${now_time.getDate() + 1}/0${now_time.getMonth() + 1}/${now_time.getFullYear()} ${now_time.getHours()}:0${now_time.getMinutes()}`
)
