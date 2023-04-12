const typeCrono = {
    forward: 0,
    backward: 1,
}

class Crono {
    constructor(id, type) {
        this.id = id;
        this.start;
        this.elcrono;
        this.view = "00:00:00";
        this.accuracy = 10;
        this.end;
        this.time;
        
        this._second = 1000;
        this._minute = this._second * 60;
        this._hour = this_.minute * 60;
        this._day = this._hour * 24;
        
        if(type === undefined) {
            this.typeCrono = typeCrono.forward;
        } else {
            this.typeCrono = type;
        }
        
        this.day; this.hour; this.minute; this.second;
    }
}
