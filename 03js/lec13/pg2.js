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