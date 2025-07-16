let num1=308;
let num2=new Number(308);
let num3=new Number(308);
console.log(num1==num2);
console.log(num2==num3);

let num = 284.965;
console.log(num.toFixed(2));
console.log(num.toPrecision(3));
console.log(num.toExponential(0));
console.log(num.toString());
console.log(num.valueOf());


//math

console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI);

//floor and ceil

let num4=23.8;
console.log(Math.floor(num4));
console.log(Math.ceil(num4));


//Math.random() function

//Q1. generate number from 0<= num <1;
console.log(Math.random());
//Q2. generate number from 0-9
console.log(Math.floor(Math.random()*10));
//Q3. generate number from 1-10
console.log(Math.floor(Math.random()*10)+1);
//Q4 . generate number from 2-13;
console.log(Math.floor(Math.random()*12)+2);

//Q5. 30-40
console.log(Math.floor(Math.random()*(40-30+1))+30);
// console.log(Math.floor(Math.random()*(max-min+1)+(min)));