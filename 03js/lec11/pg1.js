//Object in js part 2:

//Shallow Copy Vs Deep Copy 

//shallow copy
let obj1={
    a:1,
    b:2
}

console.log(obj1);
let obj2=obj1; //shallow copy , changes in one lead to another
obj2.a=5;
console.log(obj2,obj1);

//deep copy

let obj3={
    a : 3,
    b : 9
}
console.log(obj3)
let obj4=structuredClone(obj3); //proper way for deep copy , changes in one doesn't lead to other
obj4.a=20;
console.log(obj4,obj3);


let obj5=Object.assign({},obj3) //copy object using object.assign , it has a disadvantage it get fail in nested loop
obj5.b=10;
console.log(obj5,obj3);

let obj6 = {...obj3}; //copy using spread operator , it also has same disadvantage like object.assign
obj6.a=24;
console.log(obj6,obj3);

//NESTED OBJECT
const user={
    name : "Ayan Hussain",
    balance : 500,
    address : {
        pincode : 848101,
        city : "samastipur"
    },
    bank_name : "SBI"
}
console.log(user.address.pincode); //this how we print or access the value in nested object
console.log(user);
//disadvantage of assign operator and spread operator is that it does not copy nested object as deep copy or pass by value it copy as pass by refrence or shallow copy but for outer object it do deep copy just not for the nested part
let user1 = Object.assign({},user); // assignment operator using to copy the nested object
user1.name="Rohit"; // here we're making changes in outer object , due that no changes will bcz for outer object it do deep copy
console.log(user1,user);

user1.address.pincode = 2000;
console.log(user1,user); // here pincode will change from the user aswell bcz for nested object it will do shallow copy

//Tips  : we're also using assignment operator or spread oeprator most of the time , but we have to carefull when it comes to nested object
//best pracrtice : use structured CLone



