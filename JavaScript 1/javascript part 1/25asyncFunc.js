// async - This makes the function return a promise. 
// We can also use this instead of promise.
// await keyword, makes async function wait for promise. Basically we can eliminate than and catch code.

// This is very helpful when we have to wait for more than one async function.
// IN DEPTH in file handling.

async function loadFile(){
    let fileLoaded=true;

    if(fileLoaded){
        return "File is loaded" ; // in async we use return instead of resolve.
    }
    else{
        reject("File not found"); // in async we use throw instead of reject.
    }
}

async function readFileNow(){
    try
    {
    let msg= await loadFile(); // await keywird can only be used within async function.
    console.log(msg);
    }
    catch(error){
        console.log(error);
    }
}
readFileNow();