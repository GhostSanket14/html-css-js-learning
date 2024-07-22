// Arrays:
// Lot of java functions that work on array will also work here.

let guns=["AK","M4","SKS","SCAR","H-SCAR"];
console.log(guns); // Access all element.
console.log(guns[0]); // Access perrticular element. If that element dont exist its OP is 'undefined'
guns[0]="FAL"; // TO override element.
console.log(guns[0]);
let v=guns.push("MG3"); // add element at end.
console.log("after push",guns);
guns.pop(); // pop element at end.
console.log("After pop : "+guns);
guns.unshift("Beretta"); // add element at front.
console.log(guns);
guns.shift(); // pop element at front.
console.log("After shift : "+guns);
console.log(guns.length); // To get length.
console.log(guns.indexOf("M4")); // To get index of a element. -1 if not found.

// NOTE- If we access and non existing index it gives 'undefined' as output.
// Array is of object type.

// array can have multiple type of data
let stuff=["Sanket",14,false];
for(let i=0; i<stuff.length; i++){
    console.log(" : "+stuff[i]);
}
// loop through an array.
let cars=["BMW","GG","Audi","Farrari"];
for(let i=0; i<cars.length; i++){
    console.log("normal for loop : "+cars[i]);
}
for(let car of cars){
    console.log("Abnormal for loop : "+car);
}

// 2D array.

let namee=["Bhavesh","Grace","Harshita"];
let agee=[21,22,23];
let death=[0,0,0];
let data=[namee,agee,death];
console.log("Accessing 2D array : "+data[0][1]);


// SOME extra array functions.
// push, pop, shift, unshift are in above code. Also we can store pop/unshift in a variable as well.

// toString
let guys=["Sanket","Ghost","Bro"];
let names=guns.toString();
console.log("Array to string : "+names); // OP- Array to string : FAL,M4,SKS,SCAR,H-SCAR

// join
let numbrs=[1,5,9];
let joinedNums=numbrs.join("-");
console.log(joinedNums, typeof(joinedNums) ); // OP- 1-5-9 <- this is now of string type

// delete. WARNING interview Que
let goat=[10,20,30,40];
delete goat[1];
console.log(goat); // OP- [10, empty, 30, 40] 
// Here the length of array dont change. We just leave a gap.

// Concat, it returns a new array. Dont change existing array they still exist as it is.
let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];
let newAry=a1.concat(a2,a3);
console.log(newAry);
console.log("a1 is : "+a1);
console.log("a2 is : "+a2);

// sort. Warning interview Que
let Nummy=[10,6,4,8,3,2,8,30,47];
Nummy.sort(); // It sorts alphabetically. It a-z and 0-9
console.log(Nummy); // OP- [10, 2, 3, 30, 4, 47, 6, 8, 8]

// To sort based on ascending or decending, we have to pass it a compare function.
const compare=(a,b)=>{
    return a-b; // for decending and 'b-a' for ascending order.
}
Nummy.sort(compare);
console.log(Nummy);

// reverse
console.log(Nummy.reverse());

// splice, .splice(index to add from, number of elements to remove, elements to be added(seperated by comma) )
let horses=[1,2,3,4,5,6,7,8,9];
horses.splice(2, 3, 10,20,30,40); // Keep in mind elements to be removed and to be added have nothing to do with wach other.
console.log(horses); // Op- [1, 2, 10, 20, 30, 40, 6, 7, 8, 9]
// This modifies the original array and also we can store the deleted elements array (if we want).

// slice works here same as it works in string. (It dont modify original array it returns new array).