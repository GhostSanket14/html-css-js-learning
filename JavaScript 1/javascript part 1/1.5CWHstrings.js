// Strings.

let boy="Sanket";
console.log(boy.length);
// To access individual element.
console.log(boy[0]);
console.log(boy[1]);

let boy2="Ghost";

// Escape sequences use '\' <- this allow us to put single or double quotes in strong.
console.log("Hello is am \"Sanket\"");
console.log("Hello \n Sanket"); // for, new line.
console.log("Hello \t Ghost"); // for, tab
console.log("\rHello"); // for, carrage return
console.log("Hello\'"); // length will be 6 not 7 as escape sequence is not counted.


// String Functions.

// Replace
let fullname="Sanket Bhai"
let newFullName=fullname.replace("Bhai","Bro"); // To replace something inside of string.
console.log(newFullName);   // I can also do .replace("Bhai",""); to remove it as well.

// concat. 
console.log(fullname.concat(newFullName, " Yup ", "Multiple is possible ")); // We can concat multiple as well.

// charAt() <- You can only access strings as arrays in newer browsers. To support older browsers (i.e. IE7) you have to use charAt.
for(let a=0; a<fullname.length; a++){
    console.log(fullname[a]);
}

// includes
let gun="AK47 and M4";
console.log(gun.includes("AK47")); // true/false


// length, indexOf(), trim(), toUppercase(), toLowerCase(), replaceAll(), lastIndexOf() work the same.
// slice() is basicallu subString()   <- rules are also same.

// There are 30 methods we can use with strings.
// Do when going deep https://www.w3schools.com/jsref/jsref_obj_string.asp