let a=document.body.firstElementChild.firstElementChild; // This is to access the table tag within the div tag.
console.log(a);
console.log(a.rows); // This returns a html collection of rows. HTMLCollection(4) [tr, tr, tr, tr]
console.log(a.rows[0].rowIndex);
console.log(a.caption); // This returns caption of the table.
console.log(a.tHead); // This returns the tea head section of a table. 
console.log(a.tHead.firstElementChild); // We can do this as well.

// There are many more such. (In hary's notes)

// All that matters is that you should know that it exists. If you know it exists, 
// you can later figure out how it works while you are implementing into the project.