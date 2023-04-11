console.log("#2");
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.replace(/[,.]/g, "").split(" ");

console.log(words);
console.log(words.length);

console.log("#3");
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
console.log(shoppingCart)
shoppingCart.push("Sugar");
console.log(shoppingCart);

let question = prompt("Are u allergic?", "");
if (question.match(/yes/i)) {
    let index = shoppingCart.indexOf("Honey");
    shoppingCart.splice(index, 1);
    console.log(shoppingCart);
} else {
    console.log(shoppingCart);
}

let shoppingCartNew = shoppingCart.join(", ").replace("Tea", "Green Tea").split(", ");
console.log(shoppingCartNew)

console.log("#4");
const countries = [
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

if (countries.includes('Ethiopia')) {
    console.log("ETHIOPIA");
} else {
    countries.push('Ethiopia');
}

console.log(countries);

console.log("#5");
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess");
} else {
    webTechs.push("Sass");
}

console.log(webTechs)

console.log("#6");

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack)