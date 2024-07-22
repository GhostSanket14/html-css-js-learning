// setInterval - This method executed a function repeatedly after miliseconds.
// This is also asynchronoous.
// Here too we can use ID to stop the execution.

let count=0;

let max=window.prompt("Uptil when u want to count ");
max=Number(max);

let ID1=setInterval(countUp, 500);

function countUp(){
    count++;
    console.log(`Now count is ${count}`);
    if(count==max){
        clearInterval(ID1);
    }
}