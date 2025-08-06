// Sets : it stores values without duplicates 
//note : set not stored element in sorted order.

const seta = new Set(); //creating set
//creating set and defining set
const set = new Set([10,20,30,40,20,40,30,30]);
console.log(set);

const set2 = new Set();
//add element in set
set2.add(3);
set2.add(5);
set2.add(8);
//size of set
console.log(set2.size);
//delete elment form set
set2.delete(5); // jis bhi value ko delete karna hai , wo value dena jaruri hai
set2.delete(3);
console.log(set2);
//check if element present or not .has(value) : return answer in true or false
console.log(set.has(20));
console.log(set.has(1));
// .clear() : remove all the element of the set
console.log(set.clear());
console.log(set);  

//how to convert an array into a set
let arr1=[10,30,30,20,30,20,5,7];
const set3=new Set(arr1);
console.log(set3);
//how to convert set into and array
let array = [...set3]; // for that we'll use spread operator
console.log(array);

//union operation : we'll use spread opertor
let set4 = new Set([20,30,10,20,40]);
console.log(set4);
let set5 = new Set([10,50,70,80,40,15]);
console.log(set5);
let set6= new Set([...set4,...set5]);
console.log(set6);
//Intersection operator : for that we'll use filter , filter use on array only so we have to convert set into array then apply function then convert it back to an set
const res = [...set4].filter(num=>set5.has(num));
console.log(res);
const finalres = new Set(res);
console.log(finalres);