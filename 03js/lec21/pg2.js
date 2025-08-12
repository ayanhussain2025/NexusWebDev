// Add nodes to the DOM : i can add elment at different different places
//1.appendChild  (done previously)
//2.append (done previously)

//3.prepend : i want ki wo sabse phele attach ho (or li element se phele ek list elment karna cahta hu or parent ka first child add karna cahta hu);

const parent = document.getElementById('root'); //accessing the parent
const element = document.createElement('li'); //creating element or creating list element 
element.innerHTML="DSA"; //list elment mein vaue daldiya 
parent.prepend(element); // sabse phele elment put kardiya

//4. Insert Before : mai chata hu ki kisi particular element se phele dalu , let take me css element se phele dalna cahta hu
//first we need the acess of that elment jiske phele mai new element dalna cahta hu
const child3 = parent.children[2];
const element1=document.createElement('li');
element1.innerHTML="learning prepend";
parent.insertBefore(element1,child3); //people dont use it much kyuki isme parent. ke baad suggestion nahi aate


//5. replaceChild() : it is used to replace some elment
parent.replaceChild(element1,child3);

//6.innerHtml
parent.innerHTML+="<li>using inner html</li>"

//7. insertAdjacentHtml()
// .beforebegin : parent element se phele
// .afterbegin : first child
// .beforeend : parent element ke baad mein
// .afterend : last child

const element2 = document.createElement('div');
element2.innerHTML="coder army";
parent.insertAdjacentElement("beforebegin",element2);

//8. remove() : used to remove the node
//isme jisko bhi remove karna hai us child ka acess hona cahiye
document.querySelector('li').remove(); //first list element ko remove kardiya

//9 .removechild(Node) :
// document.querySelectorAll('li')[1].removeChild();

// The doesn’t work is because removeChild() must be called on the parent node of the element you want to remove, and you must pass the actual child element as an argument.

// In your code:

// document.querySelectorAll('li')[1] is already the child (the <li> itself), not its parent.

// When you call .removeChild() on it without arguments, it fails because:

// You didn’t pass a node to remove.

// Even if you did pass something, <li> doesn’t contain another <li> (unless it has nested elements).

// Correct usage
// If you want to remove the second <li> using removeChild():

const parent3 = document.getElementById('root'); // UL or parent element
const liToRemove = document.querySelectorAll('li')[1]; // second li
parent.removeChild(liToRemove); // remove it from parent
// Quick comparison
// Method	How it works	Needs parent reference?
// element.remove()	Removes the element directly	❌ No
// parent.removeChild(child)	Removes the child from its parent	✅ Yes

