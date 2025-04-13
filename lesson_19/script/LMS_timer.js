const parent = document.querySelector('.timer');
const btnTimer = document.querySelector('.btn_timer');
let startTime;



let timerId;

function timer () {
    timerId = setInterval(() => {
        startTime--;
        const minut = Math.floor(startTime / 60);
        const second = startTime % 60;
        parent.textContent = `${minut.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
        if(startTime <= 0) {
            clearInterval(timerId);
            parent.textContent = "Timer is over";
        }
    }, 1000)
    
    
}

btnTimer.addEventListener('click', () => {
    clearInterval(timerId);
    startTime = 85;
    timer();
})
