
const hour = document.querySelector("#hours_32");
const week =  document.querySelector("#lastWeek");
const playHour = document.querySelector("#play");
const playWeek = document.querySelector("#playweek");
const study = document.querySelector("#Study");
const Lastweek = document.querySelector("#Lastweek");
const exercise = document.querySelector("#Exercise");
const exerciseweek = document.querySelector("#Exerciseweek");
const Social = document.querySelector("#Social");
const Socialweek = document .querySelector("#SocialWeek");
const Selfcare = document.querySelector("#Selfcare");
const Selfcareweek = document .querySelector("#Selfcareweek");
const dailyOption = document.querySelector("#daily_option");
const monthlyOption = document.querySelector("#monthly_option");
const weeklyoption = document.querySelector("#weekly_option");

let myData;

fetch('/data.json')

.then(response => response.json ())
.then(data => {
      myData = data;
     rendertime("weekly");   
});
const dailyOptionClick = () => {
    dailyOption.classList.add('active');
    monthlyOption.classList.remove('active');
    weeklyoption.classList.remove('active');
     rendertime("daily");
}
const monthlyOptionClick = ()  => {
    monthlyOption.classList.add('active');
    dailyOption.classList.remove('active');
    weeklyoption.classList.remove('active');
    rendertime("monthly");
}
const weeklyOptionClick = () => {
    weeklyoption.classList.add('active');
    monthlyOption.classList.remove('active');
    dailyOption.classList.remove('active');
    rendertime("weekly");
} 
function rendertime (key) {
    hour.innerHTML = myData[0].timeframes[key].current + ' hrs';
    week.innerHTML =  "Last Week - " +   myData[0].timeframes[key].previous   + ' hrs' ;
    playHour.innerHTML = myData[1].timeframes[key].current +' hrs';
    playWeek.innerHTML = 'Last Week - ' + myData[1].timeframes[key].previous + ' hrs';
    study.innerHTML = myData[2].timeframes[key].current + ' hrs';
    Lastweek.innerHTML = 'Last Week - ' + myData[2].timeframes[key].previous + ' hrs';
    exercise.innerHTML =  myData[3].timeframes[key].current + ' hrs';
    exerciseweek.innerHTML = 'Last Week - '+myData[3].timeframes [key].previous + ' hrs';
    Social.innerHTML = myData[4].timeframes[key].current + ' hrs';
    Socialweek.innerHTML = 'Last Week - '+myData[4].timeframes[key].previous + ' hrs';
    Selfcare.innerHTML = myData[5].timeframes[key].current + ' hrs';
    Selfcareweek.innerHTML = 'Last Week - '+myData[5].timeframes[key].previous + ' hrs';
} ;
dailyOption.addEventListener('click', dailyOptionClick); 
weeklyoption.addEventListener('click',weeklyOptionClick);  
monthlyOption.addEventListener('click',monthlyOptionClick);
     




