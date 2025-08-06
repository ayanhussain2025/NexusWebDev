//Reduce : reduces ka kaam hota hai mere liye ek result obtained karna , reduce function expect two values 1.callback fn and 2. intializer
//call function can have four parameter at max 
// 1. accumutor : jo bhi value callback fn return karega usko accumulator bolte , and initaly of you have to initialize with some value nad that value known as initializer.
// 2. value (curr) =  take element of array one by one in each fn call 
// 3. index
//4 . array

// syntax
let arr = [23,43,121,43,21];
// const result = arr.reduce(useCallback,initializer);
const result = arr.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc; //jo bhi return karoge wo accumulator mein hi jayega , eveen reurn 1;
},0) //we initialize accumulator with 0 and this program is for calculating sum of all element in an array
console.log(result);

//you can write above fn in a single line 
const result1 = arr.reduce((sum,curr)=> sum + curr,0);
console.log(result1);


//real world use cases : suppose you're getting an array from backend where data is present , and you have to give an output in form of object , where you'll tell how much the elment repeat

let data = ["orange","apple","banana","orange","orange","apple","grapes","orange"];
const countdata = data.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else acc[curr]=1;
    return acc;
},{});
console.log(countdata);