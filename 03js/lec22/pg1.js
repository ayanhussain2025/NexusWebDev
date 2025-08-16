const button = document.querySelector('button');
button.addEventListener('click',()=>{
    const input1=document.getElementById('num1');
    const num1=Number(input1.value);
    const input2=document.getElementById('num2');
    const num2=Number(input2.value);
    const sum = num1+num2;
    const res=document.querySelector('.result');
    res.innerText="result : "+sum;
});