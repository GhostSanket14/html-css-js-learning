
// Variable has, 1. declaration 2. Assignment operator.

let age=22; // This is number datatype.
let namee="Sanket" // This is String datatype. (both "" OR '' can be used.)
let married=false; // This is boolean datatype.

console.log("Age is ",age); // To seperate here we use , instead of +  
console.log(namee);
console.log(married);

// Basics Opearion on variables.

namee=namee+2; // Above we declare 'namee' as string so now it will treat all data as String.
namee=namee+"Hodage"; // This is how we concat a string.
console.log(namee);

// This way we can write to DOM, ie: webpage.
document.getElementById("Para1").innerHTML= "Hello to HTML from JS - " + namee;

// Constant
const PI=3.14159; // A constant once assigned cant be chaged.
// Naming constant in all Uppercase is a Good practice.

// Here the scope of varible rules are,
//      1. Anything declared with 'let' is limited to bolck scope. IE: {}
//      2. Anything declared with 'var' is limited to function scope / it is mostly used for global scope.
//      3. Global variable is something thats declared outside function.


// What we did below is also allowed.
true
74
"Sanket"