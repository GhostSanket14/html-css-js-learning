// Synchronous - ordered fashion. (Below code will execute in fix order)
//             - Start execution now and finish the execution now.               

console.log("Start");
console.log("This is mid");
console.log("End");

// A-Synchronous - unordered fashion. (Below code will not execute in fix order)
//             - Start execution now and finish the execution Later.
//             - Eg- Talk to Database.
// Basically we dont want out program to wait for some process to finish.
// setTimeout();

console.log("Start");
setTimeout(()=> {console.log("This is mid") }, 2000 ); // Above and below will be executed. And this this middle line will be executed.
console.log("End");                              // As we dont want to wait for some code to finish first.