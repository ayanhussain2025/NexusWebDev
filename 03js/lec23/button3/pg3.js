//EventBubbling , EventCapturing and EventDelegation
const body = document.body;
const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON')
     body.style.backgroundColor = event.target.id;
    //  console.log(event.target.tagName);
})