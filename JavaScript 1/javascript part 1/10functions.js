// FUNCTIONS
// Here the scope of varible rules are,
//      1. Anything declared with 'let' is limited to bolck scope. IE: {}
//      2. Anything declared with 'var' is limited to function scope.

function walking(){
    console.log("Left ");
    console.log("Right ");
    console.log("Left ");
    console.log("Right ");
}
walking();
walking();

// Lets pass some parameters.
function nameAgeIP(){
    console.log("Enter name:");
    let namee=window.prompt("Enter the Name : ");
    console.log("Enter Age");
    let agee=window.prompt("Enter the Age : ");

    nameAgeOP(namee, agee); // while passing variable names have to be same as above.
}
function nameAgeOP(Pnamee, Pagee){ // We can have different var names. where we receive the parameters.
    console.log("Name is"+Pnamee+" Age is "+Pagee);

}
nameAgeIP();

// RETURN statements

function calculateSquare(pVal){
    let ans=pVal*pVal;
    return ans;
}
function askForSquare(){
    let value=window.prompt("Enter value: ");
    console.log("Returned value is : "+calculateSquare(value)); 
}
askForSquare();


// Function-Inside-Other-Function
// outer function have access to inner function. And inner are hidden.
// Add data security and they are used in closures.
// Stucy closure later.

let namee="Ghost Baba";
let privateMsg="I miss u V";

login(); // This means we can access other functions only after i invoke login();

function login(){
showName();
showInbox();

function showName(){
    console.log(`Hello ${namee}`);
}
function showInbox(){
    console.log(`Private msg is ${privateMsg}`);
}

}