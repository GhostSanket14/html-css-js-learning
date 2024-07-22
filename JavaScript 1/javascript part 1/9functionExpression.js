// function expression is a function without name, (anonymnous function).
// It help us avoid pollute global scope with names.

const greatThem= function(){
    console.log("Hello from func exp ");
}
greatThem(); // This way we dont have to think of unique name for each function.
// THis is helpul specially in case of function we wont be using later. (rare or at all).
let count=0;
document.getElementById("cBtn1").onclick = function(){
    count++;
    document.getElementById("lbl").innerHTML=count;
}
document.getElementById("cBtn2").onclick = function(){
    count--;
    document.getElementById("lbl").innerHTML=count;
}

// Arrow function expression.
// It is a compact alternative to traditional function expression.
//   => 
const name=(pasVal)=> {
    console.log("pas val is "+pasVal);
}
name("AABBCCGG");

// func exp withing a function.
let markss=[5,3,1,2,4];
markss.forEach( (markss) => console.log(markss) );