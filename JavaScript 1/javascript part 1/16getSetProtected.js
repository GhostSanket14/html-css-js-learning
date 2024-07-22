// Lets use getter-setter and protected [property.]

class car{
    constructor(speed){
        this._gas=0;
        this._speed=speed; // here underscore means protected property.
    }   // so just as in java we use getter and setter for it.

    get speed(){ // getters also let us do extra logic if we want.
        return `speed is ${this._speed}`;
    }

    set gas(value){
        if(value<50){
        this._gas=value;
    }
    }   
    get gas(){
        return this._gas;
    }
}

let carObj=new car(400);
console.log(carObj.speed);
carObj.gas=10;
console.log(carObj.gas);