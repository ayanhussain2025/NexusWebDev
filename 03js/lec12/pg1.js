//Function in js : function is just a way of writing code , and you use that code again and again whenever you want once the code or function is written  

//1st method
function greet() //defining the function
{
    console.log("Hello Coder Army");
    console.log("Hi Kesa Hai");
    console.log("badhiya tu bta");
}

greet(); //calling the function

//function for adding two number 
function sum(number1,number2)
{
    console.log(number1+number2);
};
sum(4,5);

//you can return the value if you want to print it later
function sum1(number1,number2)
{
    return number1+number2;
}

let result=sum1(2,6);
console.log(result);
console.log(sum1);
console.log(sum1(3,4));
