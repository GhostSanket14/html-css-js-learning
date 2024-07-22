// anonymous objects - objects without name but we dont have direct access to them.
// Basically we will use array of objects but we wont be making objects. 
// Instead we will directly put the values init.

// Without anonymous object.
// class jet{
//     constructor(model, year, price){
//         this.model=model;
//         this.year=year;
//         this.price=price;
//     }

//     drive(){
//         console.log(`Your flew the ${this.model}`);
//     }
// }
// const jet1=new jet("F14",2021,2.5);
// const jet2=new jet("Tu4",2022,3.5);
// const jet3=new jet("Su30",2023,4.5);

// const jets=[jet1,jet2,jet3];

// With anonymous object.
// We will not make objects but instead, we will put data directly in array.


class jet{
    constructor(model, year, price){
        this.model=model;
        this.year=year;
        this.price=price;
    }

    drive(){
        console.log(`Your flew the ${this.model}`);
    }
}

const jets=[new jet("F14",2021,2.5),
            new jet("Tu4",2022,3.5),
            new jet("Su30",2023,4.5)];

console.log(jets[0].model); // Now we will access properties via index. Now we dont have to make object for each.

jets.forEach(jet =>{
console.log(jet.model);
})