const form = document.querySelector('form');
// form.addEventListener('click',(event)=>{
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.id);
//     console.log(event.target.value);
// })

// #Event Type
// 1.) input : jese hi mein input dalraha hu wese hi trigger hota rahega

// form.addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })

// 2.) change : jese hi mein input kisi input field mein change karha hu aur kahi bahar(input field se bahar) click karha hu to ye event trigger horaha hai

// form.addEventListener('change',(event)=>{
//     console.log(event.target.value);
// })
//3,4,5,6,7,8 : see this in your notes


//Benifits of using eventListner on form : MINI PROJECT\

// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     const first= document.getElementById('first');
//     const second = document.getElementById('second');
//     const third = document.getElementById('third');
//     const result = document.getElementById('result');
//     result.innerHTML = `${first.value} ${second.value} is a good boy`;

// })

// 9.formData object/API/function

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const Data = new FormData(form); //jo bhi form ka data hoga wo iske ander store hojayega in form of key-value pair
    console.log(Data);
    console.log(Data.keys()); //iske mujhe sari keys milgya in the form of an "Iterator" : ispe me iterate karsakta hu using for off loop
    console.log(Array.from(Data.keys())); //we can also convert it into an array
})