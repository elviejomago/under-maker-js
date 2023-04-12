const Timer = {
    now: new Date(),
    day: 0,
    month: 0,
    year: 0,
    hour: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
}

function initTimer() {
    while (true) {
        Timer.now = new Date();
        Timer.hour = Timer.now.getHours();
        Timer.minutes = Timer.now.getMinutes();
        Timer.seconds = Timer.now.getSeconds();
        Timer.milliseconds = Timer.now.getMilliseconds();
        Timer.day = Timer.now.getDate();
        Timer.month = Timer.now.getMonth();
        Timer.year = Timer.now.getYear();
    }
}
