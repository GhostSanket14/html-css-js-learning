// class - a blueprint
// it has properties and functions.

class soldier{
    kills=0;
    printKills(){ // We dont have to write function-keyword in class
        console.log(`Your kills are ${this.kills}`);
    }
    countKills(){
        this.kills++;
    }
}
let soldierObj1=new soldier();

soldierObj1.countKills();
soldierObj1.printKills();
console.log(soldierObj1.kills);

// constructor - accept argument and assign properties.

class student{
    // Unlike java we dont have to make variables here.
    static totalStudents=0; // just like java, static is only 1 and is shared between objects of that class.
    // static belongs to class and not object. 
   
    constructor(name, age, GPA){
        this.name=name;
        this.age=age;
        this.GPA=GPA;
        student.totalStudents++;
    }
    study(){
        console.log(`Student ${this.name} is studying`);
    }
    static itHappy(){
        console.log(`Student ${this.name} is happy`);
    }
}

const sObj=new student("Sanket",22,8.5);
console.log(sObj.GPA);
sObj.study();
student.itHappy(); // So to call static use class name and not object name.
