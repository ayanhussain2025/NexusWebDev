//map : used to update things

const arr=[12,43,21,22,45];
let result = arr.map(num=>num*2);
console.log(result);

//you can use multiple call functiion together even filter and map together

//ex : suppose if you want only even number to become multiple with 2

let result1 = arr.filter(num=>num%2==0).map(num=>num*2);
console.log(result1);