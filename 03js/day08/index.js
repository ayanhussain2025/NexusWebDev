let arr=[23,4,5,4,23,56];
console.log(arr);
console.log(arr[2]);
console.log(arr.at(3));
console.log(arr.length); //this will the length of the string

let newarr = arr;
console.log(newarr==arr);
let newarr1 = structuredClone(arr);
console.log(newarr1==arr);

let arr1=[34,45,23,45,65];
arr1.push(21);
arr1.push(44);
console.log(arr1);
arr1.pop();
console.log(arr1);

arr1.unshift(2);
console.log(arr1);

arr1.shift();
console.log(arr1);


console.log(arr1.indexOf(23));
console.log(arr1.includes(89));

console.log(arr1.slice(1,4));
console.log(arr1.splice(1,4));
console.log(arr1);

//replacing element using slice
let arr2=[23,45,32,78,98,221];
arr2.splice(2,3,12,12,12);
console.log(arr2);

//adding element after index 2 using splice
let arr3=[32,21,45,65,21,55,64];
arr3.splice(3,0,100);
console.log(arr3);

//converting array into string
console.log(arr3.toString());

//converting array into string and giving * or space between them using join
console.log(arr3.join(" * "));
console.log(arr3.join(" "));

//merging two or three array
let ans = arr3.concat(arr2,arr1,arr);
console.log(ans);

//2d array
let arr2d=[123,22,[67,65,73]];
console.log(arr2d);
console.log(arr2d[2][1]);

//convert 2d array into 1d array

console.log(arr2.flat());

//convert 3d array into 1d array
let arr4=[123,12,[23,[45,54],54],43];
console.log(arr4.flat(2));
     //or
console.log(arr4.flat(Infinity));   