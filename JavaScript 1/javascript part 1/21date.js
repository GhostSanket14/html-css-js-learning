// Date object is used to work with dates and time.
// Flexibility this offers allow us to make our own date function.


let date=new Date(1000);  // We can also pass milisedonds to date as argument and it will increate the base date by that miliSec.

date=date.toLocaleString();
document.getElementById("TodaysDate").innerHTML=date;
// We can pass there arguments to Date();
// Date(Year, Month 0-11, Day, Hour, Minutes, Sec, MiliSec);
let newDate=new Date(2024, 0, 14, 11, 30);
console.log(newDate);

// We can also extract specifics. or set them as well.
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours()); 
// Etc there are more.

// Setting dates and other times.
let setDate=new Date(2024);
console.log(setDate);
setDate.setFullYear(2026);
console.log(setDate);