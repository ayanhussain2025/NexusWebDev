//for in loop : gives power to iterate on keys in an object

let obj={
    name : "Ayan Hussain",
    age : 22,
    gender : "Male",
    city : "Samastipur"
}

for(let keys in obj)
{
    console.log(keys,obj[keys]);
}

//Q. what is the difference between Object.keys() and for-in loop ?

let obj2 = Object.create(obj);
obj2.phonenumber=8252505984;
obj2.course ="computer science";
console.log(Object.keys(obj2)); //this will only print the property of obj2, not the property inherited from obj 

for(let keys in obj2)
    console.log(keys); //this will also print the inherited property of different object

//Q. When we create an object we know that it inherit all the propert from Object.prototype, so when we're using for in loop then why it is not printing properties like toString etc.
//solution : because when we create a propery or key value pair we also write writable , enumerable and configurable with it.

//writable : means you can change the vlaue of the property or keys
//enumerable : if it is true me it get printed by for-in loop is properties inherited by other object for-in loop will also print the inherited property (check notes). and if it false it cannot be printed by the object.keys
//configurable : if true : means you can change the value of writable and enumerable , if false : you can't change the value

console.log(obj,obj2);

//how the the value of the properties :

console.log(Object.getOwnPropertyDescriptor(obj,'name')); //default property

Object.defineProperty(obj,'name',{
    writable : false
});

obj.name="Abhishek"; // name will not change bcz writable : false
console.log(obj.name);