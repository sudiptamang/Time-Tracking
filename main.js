
// const Hour = document.querySelector("#hours")
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
        hour.innerHTML = data[0].timeframes.weekly.current + ' hrs';
        week.innerHTML =  "Last Week - " +   data[0].timeframes.weekly.previous   + ' hrs' ;
        playHour.innerHTML = data[1].timeframes.weekly.current +' hrs';
        playWeek.innerHTML = 'Last Week - ' + data[1].timeframes.weekly.previous + ' hrs';
    study.innerHTML = data[2].timeframes.weekly.current + ' hrs';
    Lastweek.innerHTML = 'Last Week - ' + data[2].timeframes.weekly.previous + ' hrs';
    exercise.innerHTML =  data[3].timeframes.weekly.current + ' hrs';
    exerciseweek.innerHTML = 'Last Week - '+data[3].timeframes.weekly.previous + ' hrs';
    Social.innerHTML = data[4].timeframes.weekly.current + ' hrs';
    Socialweek.innerHTML = 'Last Week - '+data[4].timeframes.weekly.previous + ' hrs';
    Selfcare.innerHTML = data[5].timeframes.weekly.current + ' hrs';
    Selfcareweek.innerHTML = 'Last Week - '+data[5].timeframes.weekly.previous + ' hrs';
    
    
    
    
    
    

    
});

const dailyOptionClick = () => {
    dailyOption.classList.add('active');
    monthlyOption.classList.remove('active');
    weeklyoption.classList.remove('active');
    hour.innerHTML = myData[0].timeframes.daily.current + ' hrs';
    week.innerHTML =  "Last Week - " +   myData[0].timeframes.daily.previous   + ' hrs' ;
    playHour.innerHTML = myData[1].timeframes.daily.current +' hrs';
    playWeek.innerHTML = 'Last Week - ' + myData[1].timeframes.daily.previous + ' hrs';
    study.innerHTML = myData[2].timeframes.daily.current + ' hrs';
    Lastweek.innerHTML = 'Last Week - ' + myData[2].timeframes.daily.previous + ' hrs';
    exercise.innerHTML =  myData[3].timeframes.daily.current + ' hrs';
    exerciseweek.innerHTML = 'Last Week - '+myData[3].timeframes.daily.previous + ' hrs';
    Social.innerHTML = myData[4].timeframes.daily.current + ' hrs';
    Socialweek.innerHTML = 'Last Week - '+myData[4].timeframes.daily.previous + ' hrs';
    Selfcare.innerHTML = myData[5].timeframes.daily.current + ' hrs';
    Selfcareweek.innerHTML = 'Last Week - '+myData[5].timeframes.daily.previous + ' hrs';

}
const monthlyOptionClick = ()  => {
    monthlyOption.classList.add('active');
    dailyOption.classList.remove('active');
    weeklyoption.classList.remove('active');

    hour.innerHTML = myData[0].timeframes.monthly.current + ' hrs';
    week.innerHTML =  "Last Week - " +   myData[0].timeframes.monthly?.previous   + ' hrs' ;
    playHour.innerHTML = myData[1].timeframes?.monthly?.current +' hrs';
    playWeek.innerHTML = 'Last Week - ' + myData[1].timeframes.monthly.previous + ' hrs';
    study.innerHTML = myData[2].timeframes.monthly.current + ' hrs';
    Lastweek.innerHTML = 'Last Week - ' + myData[2].timeframes.monthly.previous + ' hrs';
    exercise.innerHTML =  myData[3].timeframes.monthly.current + ' hrs';
    exerciseweek.innerHTML = 'Last Week - '+myData[3].timeframes .monthly.previous + ' hrs';
    Social.innerHTML = myData[4].timeframes.monthly.current + ' hrs';
    Socialweek.innerHTML = 'Last Week - '+myData[4].timeframes.monthly.previous + ' hrs';
    Selfcare.innerHTML = myData[5].timeframes.monthly.current + ' hrs';
    Selfcareweek.innerHTML = 'Last Week - '+myData[5].timeframes.monthly.previous + ' hrs';

}
const weeklyOptionClick = () => {
    weeklyoption.classList.add('active');
    monthlyOption.classList.remove('active');
    dailyOption.classList.remove('active');

    hour.innerHTML = myData[0].timeframes.weekly.current + ' hrs';
    week.innerHTML =  "Last Week - " +   myData[0].timeframes.weekly?.previous   + ' hrs' ;
    playHour.innerHTML = myData[1].timeframes?.weekly?.current +' hrs';
    playWeek.innerHTML = 'Last Week - ' + myData[1].timeframes.weekly.previous + ' hrs';
    study.innerHTML = myData[2].timeframes.weekly.current + ' hrs';
    Lastweek.innerHTML = 'Last Week - ' + myData[2].timeframes.weekly.previous + ' hrs';
    exercise.innerHTML =  myData[3].timeframes.weekly.current + ' hrs';
    exerciseweek.innerHTML = 'Last Week - '+myData[3].timeframes .weekly.previous + ' hrs';
    Social.innerHTML = myData[4].timeframes.weekly.current + ' hrs';
    Socialweek.innerHTML = 'Last Week - '+myData[4].timeframes.weekly.previous + ' hrs';
    Selfcare.innerHTML = myData[5].timeframes.weekly.current + ' hrs';
    Selfcareweek.innerHTML = 'Last Week - '+myData[5].timeframes.weekly.previous + ' hrs';

} 

dailyOption.addEventListener('click', dailyOptionClick); 
weeklyoption.addEventListener('click',weeklyOptionClick);  
monthlyOption.addEventListener('click',monthlyOptionClick);
     




