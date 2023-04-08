console.log("#1");
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

console.log("#2");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`);

console.log("#3");
console.log(typeof("10") === typeof(10));
console.log(typeof(+"10") === typeof(10));

console.log("#4");
console.log(parseFloat('9.8') === 10);
console.log(parseInt('9.8') + 1 === 10);

console.log("#5");
let pattern_1 = "python";
let pattern_2 = "jargon";

console.log(pattern_1.includes('on'));
console.log(pattern_2.includes('on'));

console.log("#6");
let str = "I hope this course is not full of jargon."
console.log(str.includes("jargon"));

console.log("#7");
let randomNumber_1 = Math.floor(Math.random() * 100);
console.log(randomNumber_1);

console.log("#8");
let randomNumber_2 = Math.floor(Math.random() * 50 + 50);
console.log(randomNumber_2);

console.log("#9");
let randomNumber_3 = Math.floor(Math.random() *  255);
console.log(randomNumber_3);

console.log("#10");
let js = "JavaScript";
console.log(js[Math.floor(Math.random() * js.length)]);

console.log("#11");
console.log("1 ".repeat(5) + "\n" + "2 1 2 4 8" + "\n" + "3 1 3 9 27" + "\n" + "4 1 4 16 64" + "\n" + "5 1 5 25 125");

console.log("#12");
let phrase = "You cannot end a sentence with because because because is a conjunction"
console.log(phrase.replace("because because because ", ""))

let firstIndex = phrase.indexOf("because");
let lastIndex = phrase.indexOf("because", firstIndex + "because".length * 2) + "because".length + 1;

console.log(firstIndex);
console.log(lastIndex);
console.log(phrase.replace(phrase.substring(firstIndex, lastIndex), ""));
