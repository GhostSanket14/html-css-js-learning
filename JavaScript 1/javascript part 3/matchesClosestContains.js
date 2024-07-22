// These 3 are important methods for searching Dom.
// sometimes we have to put dot '.' before class. 

let a=document.getElementById("1");
console.log(a.matches(".matchCloseContain")); // OP- false <- as ID of 'a' matches with class name 'matchCloseContain'
console.log(a.matches("kuthliTariCalss")); // OP- false

let b=document.getElementById("sp1");
console.log(a.contains(b)); // OP- as sp1 is insode of 1


// .closest(); -> used to check for nerest ancestor. 
// The closest() method searches up the DOM tree for elements which matches a specified CSS selector.