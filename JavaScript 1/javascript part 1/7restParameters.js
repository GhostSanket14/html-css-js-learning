// rest parameters ...
// Can be used to pass infinite number of parameters.
// As rest packs the arguments in an array.

let a=1;
let b=2;
let c=3;
let d=4;
let e=5;

console.log(sumWithRest(a,b, c)); // We can pass any number of arguments, and dont have to write function for every number of arguments.

function sumWithRest(...pasVal){
    let sum=0;
    for(let num of pasVal){
        sum+=num;
    }
    return sum;
}

function sumWithRest(x ,y, ...pasVal){ // I can do this also, in this case first two arguments will go in x and y and 
    let sum=0;                                      // then rest of the arguments will go in our rest-array.
    for(let num of pasVal){
        sum+=num;
    }
    sum+=x+y;
    return sum;
}