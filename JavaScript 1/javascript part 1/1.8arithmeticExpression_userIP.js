
// Arithmetic expression. 
// operand (variables)
// operators ( + - / * % )
// It also have operator precedence: perentheses>exponent > multiplication & division > addition & subtraction.

let height=21;
console.log(height);
height+=1; // Similarly  we can do + - * / %
console.log(height);
// Its very similar to Java.


// TAKING INPUT.

// Easy way.
// let userWeight=window.prompt("Enter your weight ");
// console.log(userWeight);

// Using html tag's
let userAge;

document.getElementById("myIPBtn").onclick = function(){
    userAge = document.getElementById("myIP").value;
    console.log(userAge);
    document.getElementById("AgeLabel").innerHTML="Hello perosn with Age "+userAge; // Here i am changing the table dynamically.
}

// Check box input.
document.getElementById("myIPBtn").onclick = function(){
    if(document.getElementById("myCB").checked==true){
        console.log("He said Yes");
    }
    else{
        console.log("Next time");
    }

    let val=document.getElementById("myCB"); // We can store the value as well.\
    if(val.checked==true){
        console.log("YUP");   
    }
}