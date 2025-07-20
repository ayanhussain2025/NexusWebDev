//date in js
const d=new Date();
console.log(d);

console.log(d.toDateString());

console.log(d.toString());

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMilliseconds());

console.log(d.getTime()); //this will how much millisecond will happen till now

const now = Date.now();
console.log(now); //same result as above

const custom= new Date("2022-10-20");//you can give custome date
console.log(custom); 

//Date calculation

const d1 = new Date("2025-10-05");
const d2 = new Date ("2025-01-01");
const diff = d1-d2;
console.log(diff);

const date = new Date();
d.setDate(d.getDate()+7);
console.log(d);