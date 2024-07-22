// This function executes after certain milisecond.
// This function is asynchronous - It doesnt stop execution of rest of program.
// Also this function returns a ID of teself. We can use this ID to pause the course.

let CoursePrice=1000;

const ID1=setTimeout(buyThisCourse,1000); // first is name of function, second is time is miliseconds.
const ID2=setTimeout(buyThisCoursePlease, 3000, CoursePrice); // We can also pass arguments.
const ID3=setTimeout(buyThisCourseOrElse, 6000);

function buyThisCourse(){
    alert("Buy this course");
}
function buyThisCoursePlease(pasVal){
    alert("Buy this course please ! Its only $"+pasVal);
}
function buyThisCourseOrElse(){
    alert("Buy this course or i will kill your Cat !");
}

clearTimeout(ID3); // This is how we can stop the Timer.