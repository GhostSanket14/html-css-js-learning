// parent to child giving stuff.
// this means we have to write and change less code.
class animal{
    alive=true;
    eat(){
        console.log(`Animal ${this.name} eats`);
    }
}
class fish extends animal{
    name="Fishy";
}

class eagle extends animal{
    name="eagli";
}

const fishObj=new fish();
const eagleObj=new eagle();

fishObj.eat();
eagleObj.eat();