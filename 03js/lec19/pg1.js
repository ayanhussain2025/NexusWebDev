//Introduction to Dom
// const obj = document.getElementsByClassName("header2");
// obj[0].innerHTML="topic abhi tak itna cover hua hai";
//above code will not work because we're trying to tun js or browser specific code on backned or nodejs
//you have to write this code on console or need to download a library
document.getElementById("first").innerHTML = "sab mast hai";
// okay one more thing when my watching a lecture on js : my teacher change the html by writing this code "document.getElementById("first").innerHTML = "sab mast hai";" in console as well as vscode but i coudn't


// ChatGPT said:
// Gotcha — this is actually a really common point of confusion when you’re starting with JS.
// The difference between your teacher’s example working in the browser console and in VS Code is all about where the JavaScript is running.

// Why it worked for your teacher
// In the browser console, you already have a web page loaded, so document exists and refers to that page’s DOM.

// document.getElementById("first") finds the element with id "first" in that page, and .innerHTML = "sab mast hai" changes its content instantly.

// Why it didn’t work for you in VS Code
// When you run a .js file directly in VS Code using Node.js:

// There is no HTML page, so document doesn’t exist → same problem you had earlier (document is not defined).

// DOM manipulation only works in a browser environment.

// How you can make it work like your teacher
// Create an HTML file with an element having the id="first":

// html
// Copy
// Edit
// <!DOCTYPE html>
// <html>
// <head>
//     <title>JS DOM Example</title>
// </head>
// <body>
//     <h1 id="first">Original text</h1>

//     <script src="pg1.js"></script>
// </body>
// </html>
// Inside pg1.js:

// javascript
// Copy
// Edit
// document.getElementById("first").innerHTML = "sab mast hai";
// Open the HTML file in your browser (or use Live Server in VS Code).
// Now it will work exactly like in your teacher’s demo.

// 💡 Key takeaway:

// DOM code (document, window) → needs browser

// Backend/logic code → can run in Node.js

// If you want, I can set up a side-by-side example so you can try both the browser way and the Node.js way in one go. That would clear this confusion forever.








