// .filter() : used to filter something

const arr =[12,13,34,54,65,21];
let result = arr.filter((num)=>num%2==0); //i am removing odd values and keeping even values (see notes to know more)
console.log(result,arr);
//use case
//Q. suppose you have an array of object and you want to take those student those marks greater than 50

const student=[{name : "Ayan",age : 22,marks : 70},
    {name : "Aakash",age : 20,marks : 23},
    {name : "Abhishek",age : 21,marks : 85},
    {name : "Ankit",age : 32,marks : 69},
    {name : "Ashish",age : 21,marks : 72}
]

let goodstudent = student.filter((obj)=> obj.marks>=70);
console.log(goodstudent);