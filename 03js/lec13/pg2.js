// Loop in js

// 1. for loop

let sum=0;
for(let i=0;i<=10;i++)
{
    sum+=i;
}
console.log(sum);

// 2. nested loop

for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        process.stdout.write(String(j)+" ");

    }
    console.log("\n");
}

let a=1;
while(a<=10)
{
    console.log(a);
    a++;
}

let b=1;
do{
    console.log(b);
    b++;
}while(b<=0); //it run loop one time even if the condition is false

// Q1. How to print element of an array

let arr = [ 20 , 30 , 40 ,70 ,43];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//Q2. How to print element of an object

const user={
    name : "Ayan Hussain",
    age : 22,
    gender : "Male",
    balance : 400
}


const values = Object.values(user);
for(let i=0;i<values.length;i++)
{
    console.log(values);
}

const keys = Object.keys(user);
for(let i=0;i<values.length;i++)
{
    console.log(keys[i],user[keys[i]]);
}

