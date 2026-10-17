const startingMinutes = 10;
let time =startingMinutes * 60;

let countdown = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
    countdown.innerHTML = Math.floor(time / 60) + ":" + (time % 60 < 10 ? '0' : '') + time % 60;
    time--;
}