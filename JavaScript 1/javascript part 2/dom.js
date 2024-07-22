// When we access HTML document and try to change or modify its elements using JavaScript it is called DOM.
// it is line a tree structure. https://www.w3schools.com/js/js_htmldom.asp
document.head // this gives head html-tag.
document.documentElement // this gives body html-tag.
document.title="AA" // To access title.

// Accessing childrean of an Element.
// Basically inner hmtl tag/text is child of outer html tag.
// Direct child= Eg- you are son of your father
// All decendent nodes inside a tag are its decendent.
console.log(document.body.firstChild); // give first child. this counts 'space' as text child.
console.log(document.body.lastChild); // give last child.
console.log(document.body.childNodes); // this gives all nodes.
// We get node list (called DOM collections) and we can use it for DOM manipulation. (we can convert the Node list to array btw)


// DOM collections
console.log(document.body.firstChild); // using dom we will get first child of body teg.
let a=document.body.firstChild;
console.log(a.parentNode); // this returns even the comments.
console.log(a.parentElement); // Here difference is that, 'parentElement' only return if parent is element. (html tag)

// Element only navigation.
console.log("|---------------------|");
let val=document.body // this access the body tag
console.log(val.firstChild); // This actually returns anything which is the first child. It can be text, it can be comment, it can be anything.
console.log(val.firstElementChild); // But this returns only the HTML tag. Here the element means tag.
// OP- #text
// OP- <nav> <ul> <li>Home</li> ... </ul></nav>   <- This is because now is the first child.


// Using this knowledge we can actually write something like this.
const colr=()=>{
    document.body.firstElementChild.style.background="red";
}