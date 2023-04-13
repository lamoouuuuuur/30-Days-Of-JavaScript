console.log("#4");

for (let i=1; i < 8; i++) {
    console.log("#".repeat(i));
}

console.log("#5");
for (let i = 0; i < 11; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}

console.log("#6");
console.log("i", "i^2", "i^3");
for (let i= 0; i < 11; i++) {
    console.log(i, i**2, i**3);
}

console.log("#7");

const even = [];
for (let i=0; i <= 100; i++) {
    if (i % 2 === 0) {
        even.push(i);
    }
}

console.log(even);

console.log("#8");
const odd = [];
for (let i =0; i <= 100; i++) {
    if (i % 2 !== 0) {
        odd.push(i);
    }
}

console.log(odd);

console.log("#9");

function isPrime(number) {
    const del = [];
    for (let i=1; i <= number; i++) {
        if (number % i === 0) {
            del.push(i);
        }
    }

    return del.length === 2;
}
const prime = [];
for (let i=0; i <= 100; i++) {
    if (isPrime(i)) {
        prime.push(i);
    }
}

console.log(prime);

console.log("#10");

let sum = 0;
for (let i=1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

console.log("#11, #12");

let sum_evens = even.reduce((acc, el) => acc + el, 0);
let sum_odd = odd.reduce((acc, el) => acc + el, 0);
console.log(`The sum of all evens from 0 to 100 is ${sum_evens}. And the sum of all odds from 0 to 100 is ${sum_odd}`);

console.log("#13");
let arr_1 = [];
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 100) + 1;
    arr_1.push(num);
}
console.log(arr_1);

console.log("#14");
let arr_2 = [];
while (arr_2.length <= 5) {
    let num = Math.floor(Math.random() * 100) + 1;
    if (arr_2.indexOf(num) === -1) arr_2.push(num);
}
console.log(arr_2);

console.log("#15");

const password = [];
let symbols = 'abcdefghijklmnopqrstuvwxyz123456789';
for (let i=0; i < 6; i++) {
    let index = Math.floor(Math.random() * symbols.length);
    if (password.indexOf(index) === -1) password.push(symbols[index]);
}

console.log(password.join(""))



