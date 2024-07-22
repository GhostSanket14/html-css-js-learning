// Search in the dorm functions are what we will use most of the time.
// Do you use Next sibling, previous sibling, current parent. These type of functions can be used when we are able to search the Dom first.
// we can use, Get element by ID or get element by class name or querySelector. We have a great flexibility.

// Lets try to change the card title to Red. Using DOM.
// Method 1
let a=document.getElementById("cardChaTitle1") // it goves element we asked for.
a.style.color="red"

// Method 2
let b=document.getElementsByClassName("card-title"); // it gives all elements with that class name.
b[0].style.color="blue" // Then we can access these elements individually using index.
b[1].style.color="green"
b[2].style.color="yellow"

// Sanket see if u can do multiple search like this. " document.getElementsByClassName().getElementById() "

// There are more in harys notes but these are enough. Learn those once on advance lelel
// 1. document.querySelectorAll
// 2. document.querySelector
// 3. document.getElementByTagName <- here we get using HTML tags, as there can be many of same tag. Use index to choose a specific one.
// 4. getElementByName