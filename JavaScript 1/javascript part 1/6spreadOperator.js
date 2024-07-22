// A spread operator ... is used to seperate a iterable into individual elements.
// We can also use this to pass lot of arguments to the function.

let numbers=[1,2,3,4,5,6];
console.log(numbers);
console.log(...numbers); // OP- 1 2 3 4 5 6

let max1=Math.max(numbers); // OP- NaN
console.log(max1);
let max2=Math.max(...numbers); // OP- 6
console.log(max2);

// The right way to merge arrays.
let name1=["A","B","C"];
let name2=["D","E","F"];
name1.push(name2); // OP- ['A', 'B', 'C', Array(3)]
console.log(name1);
name1.push(...name2); // OP- ['A', 'B', 'C', 'D', 'E', 'F']
console.log(name1); 