//Destructuring of an Object : it means we have to withdraw(nikalna) some value from the object
let user={
    name : "Ayan Hussain",
    age : 22,
    Balance : 500,
    gender : "Male"
}

//kese nikale name aur balace ko object mein se
const {name ,Balance}=user;
console.log(name,Balance);
console.log(user);

//you can change the name of the variable also

const {name : FullName, Balance : Money} = user;
console.log(FullName,Money); //now you have to user fullname and money , you cannot use name anf balance

//now i want to remove age and gender and baki bache value kise object me daal do
const {age , gender,...user1}=user;
console.log(user1);
console.log(user);
console.log(age,gender);

//Destructuring of an array
const arr=[23,43,65,78,82];
const [index0, index1] = arr;
console.log(index0,index1,arr);

  //suppose now i want ki mere pass 0, 1 and 4th index ki value ajaye for that

  const [zeroindex,firstindex, , ,fourthindex]=arr;
  console.log(zeroindex,firstindex,fourthindex);

//how to do destructure in nested object

const person={
    name : "Ayan Hussain",
    age : 22,
    Balance : 500,
    address : {
        pincode : 848101,
        city : "samastipur"
    },
    gender : "Male"
}

const {address : {pincode}}=person;
console.log(pincode);


//Q.put array in object and print it second value

const person1={
    name : "Ayan Hussain",
    age : 22,
    Balance : 500,
    address : {
        pincode : 848101,
        city : "samastipur"
    },
    gender : "Male",
    cricketmatches : [22, 28,31 , 23]
}

const {cricketmatches :[ ,doosra]} = person1;
console.log(doosra);