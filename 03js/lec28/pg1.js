//why we need callback function , when we can do this with normal function
function fetchuser(){
    console.log("Fetching the user Detail.....");
    setTimeout(()=>{
        console.log("Data Fetched Successfully");
        //now i want ki after fetchig the data from backend i want send greet or meet message to some one
        const name="Ayan";
        greet(name);
        // meet(name); //here we have to hardcode the function name
    },3000);
}

function greet(name)
{
    console.log(`Hi ${name} how are you?`);
}

function meet(name)
{
    console.log(`Hi ${name} i want to meet you.`);
}

fetchuser();

//In above code we haven't use callback function , now what is the disadvantage of this , and when we use callback then what advantage we get : pg2.js


