// callback is fuunction passed as an argument as another function.
// This is done to ensure that a program is not going to fun until a task is completed. Eg. wait for file to load.

sumF(10,14, displayConsole); // use displayDOM function to see changes DOM.

function sumF(a,b, calBak){ // This way we can pass any code function to another function.
    let result=a+b;         // with minimun change to code.
    calBak(result);
}

function displayConsole(pasVal){
    console.log(pasVal);
}
function displayDOM(pasVal){
    document.getElementById("labelForCallBack").innerHTML=pasVal;
}