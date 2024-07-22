// array.forEach() executes the provided function once for each array element.

let nums=[1,2,3,4,5,6];

for(let i=0; i<nums.length; i++){
    console.log("Normal Loop : "+nums[i]);
}

// forEach, forEach(value, index, array)
nums.forEach((passedValue)=>{ // for each executes this function once for each array element.
    passedValue=passedValue*passedValue;
    console.log("For Each : "+passedValue);
})

// Array.form
let name="Sanket";
let nameArray=Array.from(name); // We use it to make array. It is IMP concept for HTML collection later on.
console.log(nameArray);

// we alrady know for-of and for-in .