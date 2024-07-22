// Gives us a timer to track how long a program takes to execute.

console.time("Response time for Input"); // The string inside is actually its name.

window.prompt("Enter something");

console.timeEnd("Response time for Input");