// we can pass objects as arguments.

class car{
    constructor(model, year, price){
        this.model=model;
        this.year=year;
        this.price=price;
    }
}
const car1=new car("BMW",2011,1.5);
const car2=new car("Audi",2012,2.5);
const car3=new car("Farrari",2013,3.5);
displData(car1);
ChangeYear(car2, 2032);
displData(car2);
function displData(pasCar){
    console.log(pasCar.model);
    console.log(pasCar.price);
    console.log(pasCar.year);
}
function ChangeYear(carp, year){
    carp.year=year;
}

// Array of Objects.
// This way we can keep all objects organised in an array.

class jet{
    constructor(model, year, price){
        this.model=model;
        this.year=year;
        this.price=price;
    }

    drive(){
        console.log(`You flew the ${this.model}`);
    }
}
const jet1=new jet("F14",2021,2.5);
const jet2=new jet("Tu4",2022,3.5);
const jet3=new jet("Su30",2023,4.5);

const jets=[jet1,jet2,jet3];

console.log(jets[0].model); // OP- F14 

jets[1].drive(); // OP- You flew the Tu4