const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const pink = document.getElementById('pink');

const body=document.body;
red.addEventListener('click',()=>{
    body.style.backgroundColor='red';
})

blue.addEventListener('click',()=>{
    body.style.backgroundColor='blue';
})

green.addEventListener('click',()=>{
    body.style.backgroundColor='green';
})

yellow.addEventListener('click',()=>{
    body.style.backgroundColor='yellow';
})

pink.addEventListener('click',()=>{
    body.style.backgroundColor='pink';
})


//Suppose id we have 100 buttons , do we need to write the same code for 100 th times for different different colors
//solution : pg2.js (see there);