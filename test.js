import './style.css'
import './main.scss'
import './node_modules/normalizecss/normalize.css'
import './node_modules/jquery/bower.json'

let timeInput = document.getElementById('time');
let timeBtn = document.getElementById('btn');
let timeShow = document.getElementById('dial');

timeBtn.addEventListener('click', function () {
    timeMinut = parseInt(timerInput.value) * 60
})

timer = setInterval(function () {
    // seconds = timeMinut%60
    // minutes = timeMinut/60%60
    // hour = timeMinut/60/60%60

    if (timeMinut <=0) {
        clearInterval(timer);
        alert('Время вышло');
    } else {
        let stringTimer = `${Math.trunc(hour)}:${Match.trunc(minutes)}:${Match.trunc(seconds)}`;
        timerShow.innerHTML = stringTimer;
    }
    --timeMinut;
}, 1000)