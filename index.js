const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elaspedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elaspedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elaspedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    timer = null;
    startTime = 0;
    elaspedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00.00";
}

function update() {
    const currentTime = Date.now();
    elaspedTime = currentTime - startTime;

    let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elaspedTime / (1000 * 60)) % 60;
    let seconds = Math.floor(elaspedTime / 1000) % 60;
    let milliseconds = Math.floor((elaspedTime % 1000) / 10);

    hours = pad(hours);
    minutes = pad(minutes);
    seconds = pad(seconds);
    milliseconds = pad(milliseconds);

    display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}
