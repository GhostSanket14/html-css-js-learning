// Map Create new array by performing some operation on each array element
// Map parameters (value, index, array)
// Difference is that map creates a new array while for each works on the same array
let arr=[10,14,5,9];
let a=arr.map((value)=>{
    console.log(value);
    return value+1;
})
console.log(arr); // OP- 10, 14, 5, 9
console.log(a); // OP- 11, 15, 6, 10  <- Because here map created a new array for us as we have returned a value above.
// 2 show map use value index and array as parameter
let b=arr.map((value, index, array)=>{
    console.log(value, index, array);
})

// Array Filter Method.
let oldArray=[5,4,9,3,9,7,9];
let filteredArray=oldArray.filter((a)=>{ 
    return a<5; // filter is basically a function that executed a function for each array element. And returns the value, if its ture
});             // we can store that value as well.
console.log("Filtered array : "+filteredArray); // OP- 4 , 3

// reduce- 
let myArr=[1,2,3,4,2,1];
// How it works, 1+2=3, 3+3=6, 6+4=10, 10+2=12, 12+1=13
let val=myArr.reduce((a,b)=>{
    return a+b;
});
console.log("reduce value is : "+val); // OP- 13
// NOTE- reduce map and flter dont affect the original array.