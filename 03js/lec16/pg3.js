// for each : it is also a callback function (see notes for more);

const arr=[20,34,12,43,54];
arr.forEach(num=>console.log(num));

arr.forEach((num,index,arr)=>{
    arr[index]=num*index;
});

console.log(arr);