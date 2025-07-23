// Q.) How we can find sum using a single sum function  when we don't now how many number of parameter or argument i am getting 
//solution : we will use rest operator(...);

const sum=function(...number) //sare parameter yaha ek ek karke ake rest karenge in a form of an array
{
    let sum=0;
    for(let i=0;i<number.length;i++)
        sum+=number[i];
    return sum;
}

console.log(sum(2,4,5));

//spread oeprator and rest operator

// ✅ Spread Operator (...) — Theory
// Purpose: Expands (unpacks) elements from arrays or objects into individual elements.

// Used in:

// Function calls

// Array and object literals

// Copying or merging arrays/objects

// Placement: Used on the right-hand side of an assignment or function call.

// 🔹 Key Points:
// Helps to make shallow copies of arrays/objects.

// Makes it easy to merge multiple arrays or objects.

// Allows you to pass multiple values at once in function calls.

// ✅ Rest Operator (...) — Theory
// Purpose: Collects (packs) multiple elements into a single array.

// Used in:

// Function parameters

// Array or object destructuring

// Placement: Used on the left-hand side of an assignment or function parameter.

// 🔹 Key Points:
// Used to handle variable number of function arguments.

// Helps to group remaining elements when destructuring arrays/objects.

// Always appears at the end of the parameter list or destructuring pattern.

// 🔁 Main Difference (Theory):
// Feature	Spread Operator	Rest Operator
// Meaning	Expands items	Collects items
// Placement	Right-hand side	Left-hand side
// Purpose	To unpack values	To pack values
// Use Case	Function calls, copying, merging	Function arguments, destructuring

//we can also pass object in a function

const user={
    name : "Ayan Hussain",
    age : 22,
    gender : "Male",
    balance : 400
}

function fun(obj)
{
    console.log(obj);
    console.log(obj.name);
}

fun(user);

//if we want name and balance the we can alse destructure them

function fun1({name,balance})
{
    console.log(name,balance);
}
fun1(user);

