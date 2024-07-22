alert("Input something here"); // Alert Gives a pop up alert

let a=prompt("Enter Age");// Prompt is used to take input from the user. it is also a pop up
a=Number.parseInt(a); // As you know. these inputs are off string type so we have to do the type conversion
// We can also put default value here, prompt("","default value here");

let ans=confirm("Are you happy ... "); // It gives true/flase as return.

// Try not to use them. As they stop the execution sometimes. Also they are used rarely.