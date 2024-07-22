// Idea behind a module is that it is a reusable code. 
// we can import section of pre-written code.
// They are great for utility values and functions.
// Think of modules as of chapters in a book.
// to use them, add type="module" in script tag.

// Below are 2 ways to import them.
import {a,b,sum,addYourValueToSum} from "./ES6_testMofule.js";
console.log(a); // OP- 10
console.log(b); // OP- 4
console.log(sum()); // OP- 14
console.log(addYourValueToSum(100)); // OP- 114

import * as moduleObj from "./ES6_testMofule.js";

console.log(moduleObj.a); // OP- 10
console.log(moduleObj.b); // OP- 4
console.log(moduleObj.sum()); // OP- 14
console.log(moduleObj.addYourValueToSum(200)); // OP- 214