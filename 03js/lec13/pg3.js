//scope of a variable
//1. Global Scope :  you can acess anhywhere in your program

let a =10;
var b=20;
const c=30;
console.log(a,b,c);

//2. Local Scope or function scope : variable create in function and only accessable inside a function

greet(); // you call this type of function beofore it declaration only for function

function greet()
{   
    let e =10;
    var f=20;
    const g=30;
    console.log(e,f,g,a); //here a is global so it can access even in function
}

// greet();

//3. block Scope

if(true)
{
    let h=18;
    var i=12;
    const j=50;
    console.log(h,i,j);
}
// console.log(h,j); //this is cannot acces acces outside the block where it created becuase it is block scope
console.log(i); //it can be accessable because it is not blockscope and that is the problem with var that's why we dont use it. 

// if you put function in a variable it also become blocked scope or you cannot access before declaration

const fun=function()
{   
    let e =10;
    var f=20;
    const g=30;
    console.log(e,f,g,a); //here a is global so it can access even in function
}
fun();

console.log(k); //it will not give error it will give undefined , it is also the problem with var 
var k=22;

