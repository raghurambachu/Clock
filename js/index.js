let hoursHandDOM = document.querySelector(".hours-hand");
let minutesHandDOM = document.querySelector(".minutes-hand");
let secondsHandDOM = document.querySelector(".seconds-hand");
let hands = {hoursHandDOM,minutesHandDOM,secondsHandDOM}



function clockPosition(hands,time){
    rotate(hands.hoursHandDOM,time.hours);
    rotate(hands.minutesHandDOM,time.minutes);
    rotate(hands.secondsHandDOM, time.seconds);
}

function rotate(hand,timeVal){
    let deg ;
    if(hand.classList.contains("hours-hand")){
        deg =  30 * timeVal - 90;
    } else {
        deg = 6 * timeVal - 90;
    }
    hand.style.transform = `rotate(${deg}deg)`;
}

function startRotating(){
    setInterval(function(){
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let time = {hours,minutes,seconds}
        clockPosition(hands,time);
        displayTime(time)
    },10)
}

startRotating();

function displayTime({hours,minutes}){
   const days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
   const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   const displayTime = document.querySelector(".display-time");
   const displayDay = document.querySelector(".display-day");
   let hour = `${hours}`.length > 1 ? hours : `0${hours}`;
   let minute = `${minutes}`.length > 1 ? minutes : `0${minutes}`;
   displayTime.innerHTML = `${hour} : ${minute}`;

   let date = new Date();
   const day = days[date.getDay()];
   const month = date.getMonth();
   const dayOfMonth = date.getDate();
   displayDay.innerHTML = `${day}, ${months[month]} ${dayOfMonth}`;
}

const mode_DOM = document.querySelector(".btn-mode");
mode_DOM.addEventListener("click",function(event){
    document.body.classList.toggle("dark");
    mode_DOM.classList.toggle("light-btn");
    if(mode_DOM.innerText === "Dark Mode"){
        mode_DOM.innerText = "Light Mode";
    } else {
        mode_DOM.innerText = "Dark Mode";
    }

    document.querySelectorAll(".hand").forEach(hand => {
        if(!hand.classList.contains("seconds-hand")){
            hand.classList.toggle("light");
        }
    })
})