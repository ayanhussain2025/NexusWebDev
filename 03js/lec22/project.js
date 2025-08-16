document.body.addEventListener('click',(event)=>{
    const circle = document.createElement('div');
    circle.className='circle';
    const text = ["Hi","Hola","Hello","Vola","kese ho"];
    circle.innerText=text[Math.floor(Math.random()*text.length)];
    //creating attribute
    const color = ["red", "blue", "orange", "green","purple", "darkblue","yellow", "wheat"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    const x = event.clientX;
    const y=event.clientY;
    circle.style.top=`${y-25}px`;
    circle.style.left=`${x-25}px`;
    document.body.appendChild(circle);

    setTimeout(()=>{
        circle.remove();
    },5000);

})