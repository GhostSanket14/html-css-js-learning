// Objects -   A group of properties and methods
// properties is what an object have in it.
// methods is what object can perform.
// This is simiar to this in java. Here this is used to point to immediate object
// Eg- if u run console.log(this) outside any-other code it refer to window object

const tank1 = { // This is how we create object.
    model:"Tiger", // properties
    color:"Grey",
    year:1945,

    drive : function(){
        console.log(`You drove the ${this.model}`);
    }
    ,
    whatClr : function(){
        console.log(`It has color ${this.color}`);
    }
}

const tank2 = { // This is how we create object.
    model:"Panther", // properties
    color:"Brown",
    year:1944,

    drive : function(){
        console.log(`You drove the ${this.model}`);
    }
    ,
    whatClr : function(){
        console.log(`It has color ${this.color}`); // Here i can use ${this.color}
    }
}
console.log(tank1.color); // To access property.
tank1.drive(); // To access method.
console.log(tank2.color); // To access property.
tank2.drive(); // To access method.