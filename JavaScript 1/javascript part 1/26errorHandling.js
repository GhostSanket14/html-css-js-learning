// errord - a object that gives description of what went wrong.

try{
    let Age=window.prompt("Enter Age Here : ");
    if(isNaN(Age)){
        throw "That is not a number my Boi";
    }
    if(Age==0){
        throw "0 is not a Age my Boi";
    }

    console.log(`Age is ${Age}`);
}
catch(error){ // Error thrown above will be caught here.
    console.log("Caught error is: "+error);
}
finally{
    console.log("Just like java, finally will always execute !");
}