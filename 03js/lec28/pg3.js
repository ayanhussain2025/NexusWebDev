//CallBack Hell : lets take some simulation of real word example of dominos pizza ordering
// lets see what is happening inside this callback function when we call placeOrder while give an arrow function as an argument
// callback = (()=>{
//     preparingOrder();
// })

// callback();

function placeOrder(callback){
    console.log("Talking with Domino's");
    
    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     callback();
    },2000)
}

function preparingOrder(callback){
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        //pickupOrder(); // 1.2 : yha pe vlaue ko hardcode nahi karna hai , bcz ap isi chiz ko multiple time reuse karhe hoge , so don't do that
        callback();
       },5000)
};

function pickupOrder(callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback();
       },3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}

// function ratingOrder(){

// }

// placeOrder(preparingOrder); //1.1 : yha pe to hamne placeOrder ko callkardiya and uske ander preparingOrder as a callback daldiya but ab manlo mein prepareorder ke baad pickup order ko call karna cahta hu te ye call kese hoga

// placeOrder(()=>{
//     preparingOrder();
// })

placeOrder(()=>{ //ye jo code hamne apne bagal me likha hai bss isi ko kehte hai callbackhell
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        })
    })
})

// callback hell : ek function ke ander ham ek aur function ko bhejrahe as an argument then us function ke ander ham ek aur function as an argument and so on this is known as callback hell (matlab callback ke ander multiple callback lagrahi hai)
// note : ye abhi only 4 level tak gyi hai mgr if you're in an company then it can go upto 50 level
//disadvantage : code becomes messy means difficult to read
//solution : promises
//note : if any issue happen in callback then it becomes very hard resolve
