//call back function : callback function is type of function in which we pass a function as an argument

//method 1:
function greet()
{
    console.log("I am callback Function");
}
function names(fun)
{
    console.log("hi i am name");
    fun();
}

names(greet);

//method 2

function names1(fun1)
{
    console.log("hi i am name");
    fun1();
}

names1(function greet1()
{
    console.log("I am callback Function");
});

//method 3

const greet2 = function()
{
    console.log("I am callback Function");
}
function names2(fun2)
{
    console.log("hi i am name");
    fun2();
}

names2(greet2);

//method 4 :

function names1(fun1)
{
    console.log("hi i am name");
    fun1();
}

names1(()=>console.log("hi i am call back function"));

//use cases of fetch data : suppose i made a function for fetching and in backend our data is continuously changing so i want this function to be called at every 5 seoconds
// for that we can use a function setInterval which is also a callback function

const fetchData = ()=> console.log("Hi i am fetching the data");
setInterval(fetchData,5000); //this is one of the real world scenario of callback function


