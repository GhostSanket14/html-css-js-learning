// dir
console.log(document.getElementsByTagName("span")[0]); // it shows element DOM tree.
console.dir(document.getElementsByTagName("span")[0]); // DIR prints the element as objec along with its properties.

let a=document.getElementById("span1");

console.log(a.innerHTML);   // innerHTML gives the html inside as string.
a.innerHTML="<i>helo guys</i>"; // we can also set the innerHTML.
console.log(a.outerHTML);   // outerHTML gives html inside of it as well as itself.
a.outerHTML="<i>helo guys Once again</i>";

console.log(document.body.textContent); // This gives all the text content of a page, also gives hidden. (Not comments inside of code)

// We can actually write hidden to make a tag output hidden.
//(Uncomment) let x=window.prompt("Y to unhide");
//if(x=="Y"){
// document.getElementById("divHidden").hidden=false; // By doing this we can unhide as well.
//}