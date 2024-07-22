// Tempelete lilterals - ' 
// They allow us to use embedded variables along with string.
// We dont have to user single or double quotes.

let userName="Sanket";
let useAge="22";

// Template use 1
console.log("Your name is : "+ userName);
console.log(`Your name is : ${userName} boss`); // Temp literals.
console.log(`To print Dollar symbols $${userName}`); // to print dollar pre-ceed with a dollar symbol.

// Template use 2

let userDataOnString=`User name is ${userName} and user age is ${useAge}`; // This way 1 big can be assigned with varibales to a variavle.
// THis allow easy mobility. Also help HTML tag fast and easy.

console.log(userDataOnString);                                                                    