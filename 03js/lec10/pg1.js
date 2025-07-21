const obj={
    name : "Ayan Hussain",
    "account number" : 34521, //space hai to ye use karna hoga console.log(obj["account number"]);
    balance : 500,
    "gender" : "Male",
    age : 22,
    1:"it can take a number as key as well but in backend it will also store as a string like other",
}

console.log(obj); //printing obj
console.log(obj.name);
console.log(obj.gender);
console.log(obj["name"]);
console.log(obj["gender"]);
console.log(obj["account number"]);
console.log(obj["balance"]);
console.log(obj[1]);

//array is imlemented by using object
let array={
    0 : 21,
    1 : 24,
    2 : 34
}
console.log(array);
console.log(array[1]);        // ✅ Works
console.log(array["1"]);      // ✅ Works — '1' is implicitly converted to string
console.log(obj["account number"]); // ✅ Works for space-containing keys
console.log(obj[1]);          // ✅ Works because 1 is converted to "1" as key


// 🔑 Why console.log(array.1) doesn't work:
// In JavaScript, you cannot use dot notation (array.1) if the key is not a valid identifier. A valid identifier must:

// Start with a letter, underscore _, or dollar sign $

// Not contain spaces or special characters (except _, $)

// Not start with a number

