// when we accept string input, its of string datatype.

let age= window.prompt("How old are you ");
console.log(typeof age); // 'age' is of string type.
age=Number(age); // type conversion. Similarly we can use 'String' 
    // fun fact, if we try to convert something which is not a number to a number. It gives NaN <- Not a Number.
    console.log("---",typeof age);
let ans=Boolean(""); // Boolean will give false in empty string. and true on string.
console.log("You are of age "+age);


age+=5;
console.log("You are of age "+age);
console.log(typeof age); // After converting 'age' is of number type.


let a=10;
if(a>5){ // Only one of these will be executed.
console.log("a>5");
}
else if(a>6){
    console.log("a>6");
}
else{
    console.log("WTF");
}