//countdown timer to olympic

const currdate = new Date();
const birthdate = new Date("2025-10-05T04:25:15");

const remandate = birthdate - currdate;
const days = Math.floor(remandate/(1000*60*60*24));
console.log(days);
const hour = Math.floor(remandate/(1000*60)%24);
console.log(hour);
const minute = Math.floor(remandate/(1000*60)%60);
console.log(minute);
const second = Math.floor(remandate/(1000)%60);
console.log(second);

console.log(`${days} Days ${hour} Hours ${minute} Minutes ${second}`);