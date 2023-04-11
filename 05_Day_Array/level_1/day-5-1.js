console.log("#1, #2", "#3");
let arr_1 = [];
let arr_2 = [1, 2, 3, 4, 5];
console.log(arr_2.length);

console.log("#4");
console.log(arr_2[0], arr_2[2], arr_2[arr_2.length - 1]);

console.log("#5");
const mixedDataTypes = [
    1, "one", true, "string", [1, 2]
]
console.log(mixedDataTypes);

console.log("#6, #7")
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);

console.log("#8");
console.log(itCompanies.length);

console.log("#9");
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length - 1]);

console.log("#10");
itCompanies.forEach(itCompany => console.log(itCompany));


console.log("#11");
let itCompaniestoUpperCase = itCompanies.map(itCompany => itCompany.toUpperCase());
console.log(itCompaniestoUpperCase);

console.log("#12");
let itCompaniesString = itCompanies.join(", ");
console.log(`${itCompaniesString} are big IT companies`);

console.log("#13");
let companyName = prompt("Enter the name company: ", "");
itCompanies.find(function() {
    itCompanies.includes(companyName);
})

console.log("#14");

console.log("#15");
itCompanies.sort();
console.log(itCompanies);

console.log("#16");
itCompanies.reverse();
console.log(itCompanies);

console.log("#17");
console.log(itCompanies.slice(0, 3));

console.log("#18");
console.log(itCompanies.slice(-3));

console.log("#19");
if (itCompanies.length % 2 === 0) {
    itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1);
} else {
    itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1);
}

console.log("#20");
itCompanies.shift();
console.log(itCompanies);

console.log("#21");
itCompanies.splice(2, 2);
console.log(itCompanies);

console.log("#22");
itCompanies.pop();
console.log(itCompanies);

console.log("#23");
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);


