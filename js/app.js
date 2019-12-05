let day = +prompt('Enter day of birth');
let month = prompt('Enter month of birth (capitalized)');
let year = +prompt('Enter year of birth');
let res;
let currentDate = {
    day: +moment().format('D'),
    month: moment().format('MMMM'),
    year: +moment().format('YYYY'),
};
const months = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
};

console.log(day, month, months[month], year);
console.log(currentDate.day, currentDate.month, months[currentDate.month], currentDate.year);

res = currentDate.year - year;
if (months[currentDate.month] < months[month]) {
    console.log(--res);
} else if (months[currentDate.month] === months[month]) {
    if (currentDate.day >= day) {
        console.log(res);
    } else console.log(--res);
} else if (months[currentDate.month] > months[month]) {
    console.log(res);
} else console.log(res);