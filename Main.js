const adjectiveArr = ["tremendous", "joyful", "excellent", "exceptional", "great", "marvelous", "nice", "pleasant", "wonderful", "super", "choice", "magnificent", "superb", "outstanding", "exquisite"];
const verbArr = ["code", "practice guitar", "get plenty of sleep", "relax", "meditate", "take a deep breath", "go for a walk", "go to the park", "take a nap"];
const today = new Date();   //get current date
const dayOfWeek = today.getDay();   //get current day as an integer value

//take dayOfweek value and make it a day Name
let dayName;
switch(dayOfWeek) {
    case 0: dayName = "Sunday";
    break;
    case 1: dayName = "Monday";
    break;
    case 2: dayName = "Tuesday";
    break;
    case 3: dayName = "Wednesday";
    break;
    case 4: dayName = "Thursday";
    break;
    case 5: dayName = "Friday";
    break;
    case 6: dayName = "Saturday";
};

//pick random words from both arrays
let adjective = adjectiveArr[Math.floor(Math.random() * 15)];
let verb = verbArr[Math.floor(Math.random() * 10)];

//create message
let message = `Today is ${dayName}, it will be a ${adjective} day! You should make sure to ${verb} today.`;

console.log(message);