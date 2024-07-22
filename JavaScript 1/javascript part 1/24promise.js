// promise - 'I promise to return something in fututre' value/exception
//  - It encapsulate result of asynchronous operation.


const promiseObj=new Promise((resolve, reject)=> { // we can put any asynchronous code in this promise.
    let fileLoaded = false;  // For now lets just pretend we are loding a file here.

    if(fileLoaded){
        resolve("File is loaded");
    }
    else{
        reject("File not found");
    }

});

 // Promoses have states - pending, fulfilled, rejected.
 // promises has 2 parts - producing code and consuming code.

 promiseObj.then((value)=> {console.log(value) } ). catch( (error) => {console.log(error)} );

 // THIS IS HOW, we pass Argument to Promise.

 const wait= inputTime=>new Promise((resolve, reject)=> { // its fine if we dont use 'reject'
    setTimeout(resolve, inputTime);
});

// we pass argument using object below.
wait(6000).then(()=> { console.log("Thanks for waiting"); } );