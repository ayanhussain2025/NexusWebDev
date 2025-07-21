//common method for objects

const obj={
    name : "Ayan Hussain",
    "account number" : 34521, //space hai to ye use karna hoga console.log(obj["account number"]);
    balance : 500,
    "gender" : "Male",
    age : 22,
    1:"it can take a number as key as well but in backend it will also store as a string like other",
}
 
// 1. Object.keys()
console.log(Object.keys(obj));
let array = Object.keys(obj);
console.log(array);

// 2.Object.values()
console.log(Object.values(obj));
let array1= Object.values(obj);
console.log(array1);

// 3 Object.entries()
console.log(Object.entries(obj));
let array2= Object.entries(obj);
console.log(array2);

//4. Object.assign() : used to combine two or more Object into a single object
const obj1={
    a : 12,
    b : 4
}

const obj2={
    c : 5,
    d : 10
}

const obj3 = (Object.assign({},obj1,obj2));
console.log(obj3);

const obj4={
    e : 43,
    f : 42
}

const obj5 = (Object.assign({},obj1,obj2,obj4));
console.log(obj5);

//Another Method to comine Object using spread Operator

const obj6 = {...obj1,...obj2,...obj4};
console.log(obj6);