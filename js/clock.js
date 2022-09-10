const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    clock.innerText =`${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}`;
}

function zeroSeconds() {
    if(new Date().getSeconds() === 0){
        getClock();
    }
}

getClock();

setInterval(zeroSeconds, 1000);