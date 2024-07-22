// Math - it is (intrinsic object) that provide basic maths functionality & constants.
// We cover basic only, there are lot more.


let x=3.5;
x=Math.round(x); // It will round down if value after decimnal point is below 5. Otherwise it will round up.
console.log(x);// Eg: 3.4=3 but 3.5=4 , 3.6=4

x=Math.floor(x); // Floor will always round down.
console.log(x);
x=Math.ceil(x); // celi will always round up.
console.log(x);

let a=2;
a=Math.pow(a,2); // a raised to power 2. Ie. 2*2.
a=Math.sqrt(a); // Square root of a

let c=-2;
c=Math.abs(c); // Abslute value is distance from zero. Basically we can use to convert -ve to +ve value.
console.log(c);

let maxmin=Math.max(a,c,x); // max will give max among these. Similar for minimum.
console.log(maxmin);