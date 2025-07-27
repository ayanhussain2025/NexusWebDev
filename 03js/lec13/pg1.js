//condiotional statement and loops

//1.If 
let age=19;
if(age>=18)
console.log("you're eligible for vote");

//2 . If-Else

age = 12;

if(age>=18)
console.log("You're eligible for vote");
else console.log("Not eligible for vote");

// If-Elseif-Else
age=12
if(age<=18)
    console.log("you're a children");
else if(age>=50)
    console.log("you're old");
else console.log("you're young");

//switch statemnt

switch(new Date().getDay())
{
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("return correct number");
        break;     
}