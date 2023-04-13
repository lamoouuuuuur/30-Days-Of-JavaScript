console.log("#1");

let password = [];
let number = Math.floor(Math.random() * 10) + 1;
let symbols = 'abcdefghijklmnopqrstuvwxyz0123456789';
for (let i=0; i < number; i++) {
    let index = Math.floor(Math.random() * symbols.length);
    if (password.indexOf(index) === -1) password.push(symbols[index]);
}

console.log(password.join(""));

console.log("#2");

const hexSymbols = "abcdef0123456789";
const hex = [];
for (let i=0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexSymbols.length);
    hex.push(hexSymbols[index]);
}

console.log(`#${hex.join("")}`);

console.log("#3");

let first = Math.floor(Math.random() * 256);
let second = Math.floor(Math.random() * 256);
let third = Math.floor(Math.random() * 256);
console.log(`rgba(${first}, ${second}, ${third})`);

console.log("#4");
let countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
for (let i=0; i < countries.length; i++) {
    countries[i] = countries[i].toUpperCase();
}
console.log(countries);

console.log("#5");
const countriesLength = [];
for (let i=0; i < countries.length; i++) {
    countriesLength.push(countries[i].length);
}
console.log(countriesLength);

console.log("#6");
const countriesInfo = [];
for (let i=0; i < countries.length; i++) {
    const country = [];
    country.push(countries[i]);
    country.push(countries[i].toUpperCase().slice(0, 3));
    country.push(countries[i].length);
    countriesInfo.push(country);
}

console.log(countriesInfo);

console.log("#7");
let result_7 = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].toLowerCase().includes("land")) {
        result_7.push(countries[i]);
    }
}

console.log(result_7);

console.log("#8");
let result_8 = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].toLowerCase().includes("ia")) {
        result_8.push(countries[i]);
    }
}

console.log(result_8);

console.log("#9");
let maxElemCountry;
for (let i=0; i < countries.length; i++) {
    let maxLength = countries[0].length;
    if (countries[i].length > maxLength) {
        maxLength = countries[i].length;
        maxElemCountry = countries[i];
    }
}

console.log(maxElemCountry);

console.log("#10");
const res_10 = countries.filter(country => country.length === 5);
console.log(res_10);

console.log("#11");
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

let maxElemTech;
for (let i=0; i < webTechs.length; i++) {
    let maxLength = webTechs[0].length;
    if (webTechs[i].length > maxLength) {
        maxLength = webTechs[i].length;
        maxElemTech = webTechs[i];
    }
}

console.log(maxElemTech);

console.log("#12");
const webTechsInfo = [];
for (let i=0; i < webTechs.length; i++) {
    const webTech = [];
    webTech.push(webTechs[i]);
    webTech.push(webTechs[i].length);
    webTechsInfo.push(webTech);
}

console.log(webTechsInfo);

console.log("#13");
const mernStack = ["MongoDB", "Express", "React", "Node"];
const mern = mernStack.join(", ");
console.log(mern);


console.log("#14");
let techs =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let tech of techs) {
    console.log(tech);
}

console.log("#15");
let fruits = [
    "banana", "orange", "mango", "lemon"
]
let res_15 = [];
for (let i=fruits.length - 1; i >= 0; i--) {
    res_15.push(fruits[i]);
}
console.log(res_15);

console.log("#16");
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
    for (let j=0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j].toUpperCase());
    }
}