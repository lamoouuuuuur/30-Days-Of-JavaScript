let month = prompt("Enter a month: ", "");
let year = +prompt("Enter a year: ", "");


if (month.match(/january/i)) {
    alert("January has 31 days");
} else if (month.match(/february/i)) {
    if (year % 4 === 0) {
        alert("February has 29 days");
    } else {
        alert("February has 28 days");
    }
} else if (month.match(/march/i)) {
    alert("March has 31 days");
} else if (month.match(/april/i)) {
    alert("April has 30 days");
} else if (month.match(/may/i)) {
    alert("May has 31 days");
} else if (month.match(/june/i)) {
    alert("June has 30 days");
} else if (month.match(/july/i)) {
    alert("July has 31 days");
} else if (month.match(/august/i)) {
    alert("August has 31 days");
} else if (month.match(/september/i)) {
    alert("September has 30 days");
} else if (month.match(/october/i)) {
    alert("October has 31 days");
} else if (month.match(/november/i)) {
    alert("November has 30 days");
} else if (month.match(/december/i)) {
    alert("December has 31 days");
}
