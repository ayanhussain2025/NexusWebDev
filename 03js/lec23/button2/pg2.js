//mujhe pta hai ki mujhe event listner button p hi lgana hai to mai direct sare button ka access lelungaa

//Accessing all the buttons
const buttons = document.querySelectorAll('button');

//mujhe pta hai ki ab mujhe ek ek karke button ko uthana hai aur unpe eventListner lagana hai => jo bottons mujjhe milrhe hai wo ek NodeList hai jo ki ek array ki trah hota hai to mai ispe .ForEach() ki madad se iterate hosakta hu

const body=document.body;

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        body.style.backgroundColor = button.id;
    })
})

//here our code becomes short
//In this project there is also a one big one problem of optimization 
//jab mere eventListner bahut jeyada hojate(or if 100 or more buttons will be there) hai, so it will consume memory , and your task will become slow , even memory can get full
//solution : EventBubbling and EventCapturing