// Method chaining, Just as what we do in java. we can call one method after another.

let namee="Sanket";
let firstCharUpperCase=namee.charAt(0).toLocaleUpperCase(); // This is where can call one method after another in one continious line of code.

// Conditions, exact as Java. IMP order of your statement matters.

let age=12;
if(age>18){
    console.log("You are adult");
}else{
    console.log("Go Drink milk child");
}

// Switches. Just as the java.

// AND OR operator. Just as the java.

// ! <- used to reverse a condition. Ie: true will be false.
let temp=118;
if(!temp<25){ // We can also do if(!(temp<25))  to be more careful.
    console.log("Its cold");
}


// Loops, while, do-while, for  all work the same. As we know we use while for task that we want to be in infinite loop.
// It also have break and continue.
let a=5;
while(a>0){
    console.log('A');
    a--;
}

// Ternary operator.
// consition ? expression if True : expression if False

let adult=window.prompt("Emter Age: ");
let ans=adult>=18? "true adult":"false adult";
console.log(ans);