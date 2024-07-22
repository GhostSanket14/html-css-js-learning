// Run these in console of the browser.
console.log(console) // This tell us all objects/methods we can use with console.

console.log("Hello from log");
console.error("This is a good Error"); // OP- This prints a red line of error in console.
console.warn("This is a good warning"); // OP- This prints a yellow line of warning in console.
console.assert(11>2); // OP- It checks a condition and gives error if false or gives nothing if true.

age={"Sanket":21,"Ghost":2000};
console.table(age); // OP- gives OP in tabular form.
console.clear(); // To clear a console. (It also tells that console was cleared)

console.time("a1");
console.timeEnd("a1"); // this check how much time it took to run a1, start-end .
// keep in mind that a1 is label. we can use this concept to compare time of loops, function etc.

