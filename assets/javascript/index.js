window.addEventListener('load', (event)=>{
   // Set Value of Time
    const endTime = new Date('2022/01/01 00:00:01').getTime();
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    setInterval(() => {
        countDown(endTime, day, hour, minute, second);
    }, 100);
});

function updateView(calculateDay, calculateHour, calculateMinute, calculateSecond) {
    // DOM Selector
    const dayV = document.querySelector('#day');
    const hourV = document.querySelector('#hour');
    const minuteV = document.querySelector('#minute');
    const secondV= document.querySelector('#second');

    dayV.innerText = calculateDay;
    hourV.innerText = calculateHour;
    minuteV.innerText = calculateMinute;
    second.innerText = calculateSecond;
}

function countDown (endTime, day, hour, minute, second) {
    var currentTime = new Date().getTime();

    var gapTime = endTime - currentTime;

    // Calculate value of time from gap time
    var calculateDay = Math.floor(gapTime / day);
    var calculateHour = Math.floor((gapTime % day) / hour);
    var calculateMinute = Math.floor((gapTime % hour) / minute);
    var calculateSecond = Math.floor((gapTime % minute) / second);

    // console.log(calculateDay + '-' + calculateHour + '-' + calculateMinute + '-' + calculateSecond);
    
    updateView(calculateDay, calculateHour, calculateMinute, calculateSecond);
}
