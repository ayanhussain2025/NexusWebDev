// //prototype chaining
// ChatGPT said:
// Prototype chaining in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. This is part of JavaScript's prototypal inheritance model.

// 📌 Key Concepts
// 1. Prototype Object
// Every JavaScript object has an internal link to another object called its prototype, accessible via __proto__ or set using Object.create() or class.

// 2. Prototype Chain
// When you try to access a property or method on an object:

// JavaScript first looks for it on the object itself.

// If not found, it looks up the prototype chain — i.e., it checks the object's prototype, then that prototype's prototype, and so on — until it either finds the property or reaches the end (null).



//we can also make function in an object
// ✨ Prototype Chaining Explanation and Example

// Base object
const obj = {
    name: "Ayan Hussain",
    age: 22,
    Balance: 500,
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};

obj.greet(); // Hello Ayan Hussain

// Even though we didn't define toString, it's available:
console.log(obj.toString()); // Inherited from Object.prototype

// ✅ Let's create another object and inherit from obj
const obj1 = {
    a: 1,
    b: 23
};

// ❌ WRONG way: obj1.__proto___ = obj;  (typo: too many underscores)

// ✅ CORRECT way:
obj1.__proto__ = obj;  // or use Object.setPrototypeOf(obj1, obj);

// Now obj1 can access properties from obj
console.log(obj1.name); // "Ayan Hussain" (inherited)
console.log(obj1.greet()); // Hello Ayan Hussain (inherited method)

// 🔍 Prototype Chaining with Arrays

let arr = [10, 20, 43, 65];

// Arrays inherit from Array.prototype
console.log(arr.__proto__ === Array.prototype); // true

// Array.prototype itself inherits from Object.prototype
console.log(arr.__proto__.__proto__ === Object.prototype); // true

// Object.prototype is the end of the chain
console.log(arr.__proto__.__proto__.__proto__ === null); // true
