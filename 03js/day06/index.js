// let str1 = 'hello\n';
// let str2 = "hi kaise ho\n";
// let str3 = `badhiya hu tum btao\n`;
// console.log(str1,str2,str3);

// let price = 50;
// console.log(`price of tomato is ${price} rupees`);


//string concatition

let s1="Ayanya";
let s2=" Hussain";
console.log(s1+s2);

console.log(s1.length);  //finding the lenght of the string

//how to print specific character of string
console.log(s2[2]);
console.log(s1.charAt(3));

//uppercase to lowercase and its vice versa

console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

//5.searching in string

console.log(s1.indexOf("ya"));
console.log(s1.lastIndexOf("ya"));
console.log(s1.includes("t"));

//6. Extracting substring
let a = "Mai hu bazigaar";
console.log(a.slice(4,6));
console.log(a.substring(7,14));
console.log(a.substr(1,10));

// 7. replacing content
console.log(a.replace("Mai","tum"));
console.log(a.replaceAll("a","d"));

// 8 .spliting string into an array

let b = "hi kaise ho tum , mai badhiya hu";
console.log(typeof(b.split(" ")));

// 9.trimmig

let c = " hi boy kaise ho ";
console.log(c.trim());
console.log(c.trimEnd());