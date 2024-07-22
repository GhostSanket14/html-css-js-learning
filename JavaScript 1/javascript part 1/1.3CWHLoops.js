// FOR-LOOP

// Lets learn for-in-loop
// It is used to traverse keys in object.

let obj={
    gun:"Ak",
    gun1:"M4",
    gun2:"SKS"
}

for(let i=0; i<Object.keys(obj).length; i++){ // 'Object.keys(obj)' this holds all keys of the values.
    console.log(`Gun ID is ${Object.keys(obj)[i]} and its value is ${obj[Object.keys(obj)[i]]}`);   
}// 'Object.keys(obj)[i]' It gives keys one by one. Ans by using these keys we can access the values.

// for-in
for(let a in obj){
    console.log(a); // OP- will be keys - gun, gun1, gun2
    console.log(obj[a]); // And by using these we can access the values as well.
}

// for-of 
for(let a of "abc"){ // It only works with iterable elements. Like above we cant use Obj here.
    console.log(a); 
}