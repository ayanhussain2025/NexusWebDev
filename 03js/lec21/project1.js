function quotechanger()
{
    const motivationalQuotes = [
    "The future depends on what you do today. – Mahatma Gandhi",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Push yourself, because no one else is going to do it for you. – Unknown",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Dream big. Start small. Act now. – Robin Sharma",
    "Your limitation—it’s only your imagination. – Unknown",
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "Strive for progress, not perfection. – Unknown",
    "Don’t be afraid to fail. Be afraid not to try. – Michael Jordan",
    "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
    "The secret of getting ahead is getting started. – Mark Twain",
    "A little progress each day adds up to big results. – Satya Nani",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
    "Great things never come from comfort zones. – Unknown",
    "Don’t limit your challenges. Challenge your limits. – Jerry Dunn",
    "Winners are not people who never fail, but people who never quit. – Unknown",
    "Small steps in the right direction can turn out to be the biggest step of your life. – Naeem Callaway",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar"
];
// This code used to update the quotes
const quote= document.getElementById("quote");
quote.innerHTML=motivationalQuotes[Math.floor(Math.random()*20)];

//this code is used to change the background color
const att = document.createAttribute("style");
let red=Math.floor(Math.random()*255);
let blue = Math.floor(Math.random()*255);
let green = Math.floor(Math.random()*255);
att.value=`background-color : rgb(${red} , ${blue} , ${green})`
const bele=  document.getElementById('bgcolor');
bele.setAttributeNode(att);

}

setInterval(quotechanger,4000);