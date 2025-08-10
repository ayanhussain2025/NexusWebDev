function timer(){
const d1=new Date(); //current Date
const d2=new Date("2028-07-21T00:00:00"); //olypic date
const diff = d2-d1; //time remaining between them in millisecond
const days = Math.floor(diff/(1000*60*60*24)); //number of days remain
const hours = Math.floor(diff/(1000*60*60)%24); //number of hours remain
const minutes = Math.floor(diff/(1000*60)%60); //number of minute remain
const seconds= Math.floor(diff/(1000)%60); //number of seconds remain
// document.getElementsByClassName("timer-days")[0].innerHTML = days; //className wale mujhe html collection return karega so mujhe first element ko select karna padega
// document.getElementsByClassName("timer-hours")[0].innerHTML = hours;
// document.getElementsByClassName("timer-minutes")[0].innerHTML = minutes;
// document.getElementsByClassName("timer-seconds")[0].innerHTML = seconds;
document.querySelector('.timer-days').innerHTML=days;
document.querySelector('.timer-hours').innerHTML=hours;
document.querySelector('.timer-minutes').innerHTML=minutes;
document.querySelector('.timer-seconds').innerHTML=seconds;

}
setInterval(timer,1000);