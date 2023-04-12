////////////////////////////////
//  CONSTANTS
////////////////////////////////
const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');
const marging = 10;
const canvasTop = (marging / 2);
const canvasLeft = (marging / 2);
const loop = {
    executionId: null,
    lastRecord: 0,
    aps: 0,
    fps: 0,
    iterator: (tempRecord) => {
        loop.executionId = window.requestAnimationFrame(loop.iterator);
        loop.update();
        loop.play();
        if ((tempRecord - loop.lastRecord) > 999) {
            loop.lastRecord = tempRecord;
            console.log('FPS: ', loop.fps);
            loop.aps = 0;
            loop.fps = 0;
        }
    },
    update: () => {
        loop.aps++;
    },
    play: () => {
        loop.fps++;
        deleteCanvas();

        ctx.beginPath();
        ctx.font = "12px verdana";
        ctx.fillStyle = "yellow";
        ctx.fillText(Timer.now, 15, 20);
        ctx.stroke();
    }
};

////////////////////////////////
//  VARIABLES
////////////////////////////////
var canvasWidth = window.innerWidth - marging;
var canvasHeight = window.innerHeight - marging;

////////////////////////////////
//  FUNCTIONS
////////////////////////////////
const resizeWindow = () => {
    canvas.style.top = canvasTop + 'px';
    canvas.style.left = canvasLeft + 'px';
    canvas.style.width = canvasWidth + 'px';
    canvas.style.height = canvasHeight + 'px';
}

const deleteCanvas = () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

////////////////////////////////
//  THREADS
////////////////////////////////
Concurrent.Thread.create(initTimer);

////////////////////////////////
//  EVENTS
////////////////////////////////
window.addEventListener('load', (e) => {
    resizeWindow();
    loop.iterator();
});

window.addEventListener('resize', (e) => {
    canvasWidth = window.innerWidth - marging;
    canvasHeight = window.innerHeight - marging;
    resizeWindow();
});
