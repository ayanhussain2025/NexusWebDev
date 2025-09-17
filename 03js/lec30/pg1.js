// // Promise : The Promise Object Represent the eventual completion(or failure) of an asynchronous operation and its resulting value.

// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=f87d05e3fe0344fdace103157251709&q=jaipur&aqi=yes`); 
// //lets belive that it will give an object in our answer
// console.log(obj); // how we handle this and how we print object

// // setTimeout(()=>{
// //     console.log(obj);
// // },2000); //you are telling me we have to wait some time lets assume 2 second , will in this time we get our object
// //problem here in setTimeout() =>data aane ka time change hosakta hai , it depends on many factor , we dont know how much time it can take

// //solution
// obj.then((data)=>{
//     console.log(data);
// })
//  //note : idhar maine aur bhi code likhe the , wo delete hogay so ek baar notes dekh lena
// const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=f87d05e3fe0344fdace103157251709&q=jaipur&aqi=yes`);
// promise.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


//Note  : uppr mai jo mera response arha hai wo header part lake derha hai , but need body part in response
const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=f87d05e3fe0344fdace103157251709&q=jaipur&aqi=yes`);

// promise.then((response)=>{
//     console.log(response.json()); //bahiya hai bhi hamko promise <pending> lake deraha hai
// })

// //how to handle this

// promise.then((response)=>{
//     const pro2=response.json() //bahiya hai bhi hamko promise <pending> lake deraha hai
//     pro2.then((data)=>{
//         console.log(data);
//     })
// })

//many people dont write like this

// const pro2 = promise.then((response)=>{
//     return response.json(); //bahiya hai bhi hamko promise <pending> lake deraha hai
// })

// pro2.then((data)=>{
//     console.log(data);
// })

// note if i just have to use .then on  pro2 they why not do like this to make syntax shorter
// promise.then((response)=>{
//     return response.json(); //bahiya hai bhi hamko promise <pending> lake deraha hai
// }).then((data)=>{
//     console.log(data);
// })  //this is known as promise chaining 

//note : we can also make this shroter

// promise
// .then(response=> response.json())
// .then(data=> console.log(data)) 

//note : you can also write like this
fetch(`http://api.weatherapi.com/v1/current.json?key=f87d05e3fe0344fdace103157251709&q=jaipur&aqi=yes`)
.then(response=> response.json())
.then(data=> console.log(data))
.catch(error=> console.log(error));

//now ek baaar data ajaye to aap kuch bhi print karwasakte ho , like this

fetch(`http://api.weatherapi.com/v1/current.json?key=f87d05e3fe0344fdace103157251709&q=jaipur&aqi=yes`)
.then(response=> response.json())
.then(data=> console.log(data.current.temp_c))
.catch(error=> console.log(error));
