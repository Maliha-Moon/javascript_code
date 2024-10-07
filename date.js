// new Date() creates a date object with the current date and time:
//JavaScript stores dates as number of "milliseconds" since January 01, 1970.

let d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());

d.toLocaleString('default',{
    weekday: "long"
});

console.log(d.get());

console.log(d.toString()); //by default
console.log(d.toDateString());
console.log(d.toISOString()); //YYYY-MM-DD Time Zone
console.log(d.toLocaleDateString());
console.log(d.toJSON());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString()); //LocaleDateString + LocaleTimeString
console.log(d.toUTCString());

console.log(typeof (d));
const myDate = new Date("2024-05-16"); //ISO format
console.log(myDate.toLocaleDateString());
//JavaScript counts months from 0 to 11
const myDate2 = new Date(2024, 0, 10, 16, 20, 30);
console.log(myDate2.toLocaleString());

// Date.now() returns in milliseconds till today
let myTimeStamp = Date.now();
console.log(myTimeStamp);
//to convert into seconds
console.log(Math.floor(Date.now() / 1000));
console.log(myDate2.getTime()); //getTime() returns in milliseconds since jan 1, 1970
