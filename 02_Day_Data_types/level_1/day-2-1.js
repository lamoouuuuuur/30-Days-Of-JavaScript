// #1
let challenge = "30 Days Of JavaScript";

// #2
console.log(`#2: ${challenge}`);

// #3
console.log(`#3: ${challenge.length}`);

// #4
let challengeUpper = challenge.toUpperCase();
console.log(`#4: ${challengeUpper}`);

// #5
let challengeLower = challenge.toLowerCase();
console.log(`#5: ${challengeLower}`);

// #6
console.log(`#6: ${challenge.substring(3)}`);

// #7
let challengeSlice = challenge.slice(0, 2);
console.log(`#7: ${challengeSlice}`);

// #8
console.log(`#8: ${challenge.includes("Script")}`);

// #9, 10
let challengeSplit = challenge.split(" ");
console.log(`#9, 10: ${challengeSplit}`);

// #11
let companies = "Facebook, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
console.log(`#11: ${companies}`);

// #12
let challengePython = challenge.replace("JavaScript", "Python");
console.log(`#12: ${challengePython}`);

// #13
console.log(`#13: ${challenge.charAt(15)}`);

// #14
console.log(`#14: ${challenge.charCodeAt(challenge.search("J"))}`);

// #15
console.log(`#15: ${challenge.indexOf("a")}`)

// #16
console.log(`#16: ${challenge.lastIndexOf("a")}`);

// #17
let str_1 = "You cannot end a sentence with because because because is a conjunction";
console.log(`#17: ${str_1.indexOf("because")}`);

// #18
console.log(`#18: ${str_1.lastIndexOf("because")}`);

// #19
console.log(`#19: ${str_1.search("because")}`);

// #20
console.log(`#20: ${challenge.trim()}`);

// #21
console.log(`#21: ${challenge.startsWith("30")}`);

// #22
console.log(`#22: ${challenge.endsWith("JavaScript")}`);

// #23
let pattern = /\w+a\w+/g
console.log(`#23: ${challenge.match(pattern)}`);

// #24
console.log(`#24: ${"30 Days of".concat("JavaScript")}`);

// #25
console.log(`#25: ${challenge.repeat(2)}`);

