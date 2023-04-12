const TIME_COEFICIENT = 0.001;

class Time {
    constructor() {
        this.time = Date.now();
        this.mDeltaTime = 0;
        this.updateTime();
    }

    get deltaTime() { this.mDeltaTime; }

    updateTime = () => {
        this.mDeltaTime = (Date.now() - this.time) * TIME_COEFICIENT;
        this.time = Date.now();
        requestAnimationFrame(this.updateTime.bind(this));
    }
}
