// 3rd way of creating function(Arrow Function) : ye bolta hai you don't even have to write function name also just give => arrow sign that will be enough making of code short

const greet = ()=>{
    console.log("Hello Coder Army");
}

greet();
const sum=(number1,number2)=>{
    return number1+number2;
}

console.log(sum(3,5));

//advantange : it tell for the single line of code you dont even have to use currly braces and return statement it will automatically return the sum

const mul =(number1,number2)=> number1*number2; //most of the time we write function like this

console.log(mul(3,7));

//one more advantage : in single parameter with only single line of code we dont even have to use bracet for taking parameter

const cube = number=> number*number*number;

console.log(cube(4));
