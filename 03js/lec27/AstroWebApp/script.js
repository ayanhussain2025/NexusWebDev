const zodiacSigns = [
    "Capricorn",   // January
    "Aquarius",    // February
    "Pisces",      // March
    "Aries",       // April
    "Taurus",      // May
    "Gemini",      // June
    "Cancer",      // July
    "Leo",         // August
    "Virgo",       // September
    "Libra",       // October
    "Scorpio",     // November
    "Sagittarius"  // December
];

//size : 31
const compliments = [
  "You have a brilliant mind.",
  "Your smile can light up any room.",
  "You are incredibly kind-hearted.",
  "You bring positivity wherever you go.",
  "You are stronger than you think.",
  "Your creativity is inspiring.",
  "You make people feel comfortable around you.",
  "You have a great sense of humor.",
  "You are thoughtful and caring.",
  "Your confidence is admirable.",
  "You are a fantastic listener.",
  "You are full of amazing ideas.",
  "Your determination is impressive.",
  "You radiate warmth and joy.",
  "You are a natural leader.",
  "You are brave and courageous.",
  "You are unique and special.",
  "Your energy is contagious.",
  "You always know how to make people smile.",
  "You are wise beyond your years.",
  "You are dependable and trustworthy.",
  "You have a beautiful soul.",
  "You spread happiness everywhere you go.",
  "You are hardworking and dedicated.",
  "You are graceful and elegant.",
  "You are curious and always learning.",
  "You are compassionate and empathetic.",
  "You inspire others to do their best.",
  "You are adventurous and fun-loving.",
  "You are humble yet amazing.",
  "You are truly unforgettable."
];

//size 20

const victimCompliments = [
  "You always put others first, even when they don’t notice.",
  "You give so much love, but rarely get the same back.",
  "You always help others, yet they forget to thank you.",
  "You stand by people, even when they leave you behind.",
  "You forgive easily, even when no one apologizes to you.",
  "You sacrifice your happiness just to see others smile.",
  "You always listen, but few listen to you.",
  "You cheer people up, but no one asks if you’re okay.",
  "You always support others, even when you’re struggling.",
  "You keep promises, even when others break theirs.",
  "You care deeply, even when people act like they don’t need it.",
  "You value friendships, even when others take you for granted.",
  "You give your time, but few give theirs back to you.",
  "You understand everyone, but no one understands you fully.",
  "You stand strong for others, even when you feel weak.",
  "You are always there for people, but they vanish when you need them.",
  "You keep helping, even after being hurt many times.",
  "You love unconditionally, even when it isn’t returned.",
  "You stay loyal, even when others betray you.",
  "You always care too much, even when others don’t care at all."
];


//size 30
const lifeRecommendations = [
  "Feed a street dog or cat.",
  "Plant a tree and nurture it.",
  "Help an elderly person cross the road.",
  "Donate clothes you no longer use.",
  "Compliment someone genuinely today.",
  "Smile at a stranger to brighten their day.",
  "Call your parents just to say you love them.",
  "Write down three things you’re grateful for.",
  "Offer water to a delivery person or worker.",
  "Teach something you know to someone for free.",
  "Avoid wasting food and share leftovers responsibly.",
  "Spend quality time with your family without distractions.",
  "Listen to someone without interrupting.",
  "Donate books to a library or school.",
  "Meditate for at least 10 minutes today.",
  "Give someone hope with encouraging words.",
  "Volunteer at a local NGO or shelter.",
  "Pick up litter from the street and throw it properly.",
  "Cook a meal and share it with someone in need.",
  "Forgive someone who hurt you and let go.",
  "Save some money for the future instead of spending it all.",
  "Reduce plastic use and carry a cloth bag.",
  "Practice kindness to yourself as well.",
  "Exercise or go for a walk in nature.",
  "Share knowledge or tips with juniors or friends.",
  "Give blood if you are healthy and eligible.",
  "Spend one hour away from your phone and reflect.",
  "Do one thing that makes you genuinely happy today.",
  "Support a local small business.",
  "Be patient and avoid anger in a difficult situation."
];

const futurePredictions = [
  "You will become a millionaire one day.",
  "You will travel to your dream country soon.",
  "You will achieve great success in your career.",
  "You will buy your own house earlier than you expect.",
  "You will meet someone who will change your life forever.",
  "You will start your own business in the future.",
  "You will become an inspiration to many people.",
  "You will find true love that lasts a lifetime.",
  "You will own a luxury car someday.",
  "You will be recognized for your hard work and talent.",
  "You will have a big and happy family.",
  "You will achieve something people thought was impossible.",
  "You will live a long, healthy, and peaceful life.",
  "You will have the opportunity to work abroad.",
  "You will write a book or create something timeless.",
  "You will receive unexpected wealth or gifts.",
  "You will make your parents extremely proud.",
  "You will become famous in your community or field.",
  "You will retire early and enjoy life fully.",
  "You will leave behind a positive legacy that people will remember."
];


const form = document.getElementById('astroForm');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    //get access to the all input values given by user
    const first = document.getElementById('fname').value;
    const surname  = document.getElementById('sname').value;
    const date = Number(document.getElementById('date').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);
    //store data or prediction about user 
    let index = Math.floor(Math.random()*20);
    const victim_complent = victimCompliments[index];
    index = (date*month*year)%30;
    const life_reccomed = lifeRecommendations[index];
    index= (first.length * surname.length *date)%20;
    const future = futurePredictions[index];

    //now we have to display result on the result div
    const result = document.getElementById('result');
    result.innerText = `Your Zodiac Sign is ${zodiacSigns[month-1]} ${compliments[date-1]} ${victim_complent} Our Life recommendation :  ${life_reccomed} our future prediction : ${future}`;  
})
