// const form = document.querySelector('form');

// const Original_Ans=['Sachin Tendulkar','Australia','Sachin Tendulkar','264','Muttiah Muralitharan'];
// form.addEventListener('submit',(event)=>{
//     event.preventDefault(); //to hold the console or it does not refresh the console

//     const data = new FormData(form);
//     const Ans = Array.from(data.values());

//     let result = 0;
//     for(let i = 0;i<Ans.length;i++)
//     {
//         if(Ans[i]==Original_Ans[i])
//             result++;
//     }
//     console.log(result);
//     //appending the result in webpage
//     const score = document.getElementById('result');
//     score.innerText=`${result} out of 5 is correct`;
// })

//problem : abhi tak ho hamne code likha hai usme ek problem hai : jav mein koi ek vlaue fill nahi karunga quiz mein to Ans array ka size kam hojayega aur  value mismatch hojayega jiske karan hamra output galat ayega
//Solution : treat original array as key value pair : ab mein .entries() key uppr khelunga bc ye mujhe key bhi lake dega aur value bhi lake dega

const form = document.querySelector('form');

const Original_Ans={
    q1 :'Sachin Tendulkar',
    q2 : 'Australia',
    q3 : 'Sachin Tendulkar',
    q4 : '264',
    q5 : 'Muttiah Muralitharan'
};
form.addEventListener('submit',(event)=>{
    event.preventDefault(); //to hold the console or it does not refresh the console

    const data = new FormData(form);

    let result = 0;

    for(let [key,value] of data.entries())
    {
        if(value==Original_Ans[key])
            result++;
    }

    console.log(result);
    //appending the result in webpage
    const score = document.getElementById('result');
    score.innerText=`${result} out of 5 is correct`;
})
