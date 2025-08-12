//1.create an element
const element1 = document.createElement('li');
element1.innerHTML="TS";

const parent1 = document.getElementById('root');
parent1.appendChild(element1);

//suppose i want to add multiple element in ul , for that we can simply make the function as pass value of list elment as a parameter
function attach(value)
{
    const element1 = document.createElement('li');
    element1.innerHTML=value;
    const parent1 = document.getElementById('root');
    parent1.appendChild(element1); //append =child se hamlog ek bar mein ek hi node html me dalsakte hai
}

attach("Git and GitHUB");
attach("React");
attach("Backed");
attach("Project");

//2. create TextNode
const element2 = document.createTextNode("Hello Coder Army");
const element3 = document.createTextNode("Hi Ayan");
parent1.append(element2,element3);

//3. create a Attribute node
//phele li element me ek attribute add karna hai class = list
const element4 = document.createAttribute("class");
element4.value="list";
//hamne attribute create kardiya now i just want to attach the attribute uske liye us elemet ka acess cahiye hoga
const curr_list = document.querySelector('li');
curr_list.setAttributeNode(element4);
//Q.How we can access second list by using parent
const element5=document.createAttribute('id');
element5.value="scd_list";
parent1.children[1].setAttributeNode(element5);


// //4. Accessing Attribute
// //phele hame wo element cahiye hoga jiska ham attribute access karna cahte hai
// //niche diye code ko console me run karo
const element6=document.getElementById('root');
// console.log(element6.getAttribute('id'));
// console.log(element6.getAttribute('class'));
// console.log(element6.getAttribute('style'));

   //set the Attribute : it used to add and update the attribute
   element6.setAttribute("custom","60"); 

   //remove the attribute
   element6.removeAttribute("custom");   