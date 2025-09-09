//callback : ek function ke ander ap doore function ko bhejrahe ho as an parameter is known as callback function
function fetchuser(callback){
    console.log("Fetching the user Detail.....");
    setTimeout(()=>{
        console.log("Data Fetched Successfully");
        const name="Ayan";
        callback(name);
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

fetchuser(greet);
// fetchuser(meet); // one problem here : if we call fetchuser for both greet and meet one by one then it can show and awkard behaviour because javascrip or node.js is an asynchronous in nature but jo setTimeout jo hota hai wo ek callback function hai jo ki js ka part nahi hai ye apka web api ka part aur ye synchronous hota hai  


//advantage 1 : we write callback function only once but we can execute greet as well as meet by the same function 
//disadvatge of old method : If we don't use callback function then we have to make two function fetchuser1() and
                            //fetchuser2() and alse we have to hardcode write greet and meet inside these two functions
                            //separately like greet in fetchuser1() and meet in fetchuser2(), so that we can call them separetly.
                            // note : isme hamara code likhne ka time double hojayega.
//solution is advantage of callback : better approach mujhe yhi karna hai ki user ki data ko fetch karo aur callback decide karega ki kisko call karna hai greet ya meet or if function like edit , showdetail you can also call them by the same functon




