// timer topic
// setTimeout(()=>{
//     alert("after 3 sec")
// },3*1000)

// const timerId=setInterval(()=>{
//     console.log("after 3 seconds")
// },3000)

// // to stop the process
// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)

// ques:
// intial value=1
// every SecurityPolicyViolationEvent,increase 1,2,3,4, till 10 then clear

// setTimeout(()=>{console.log("1")},1* 1000)

// setTimeout(()=>{console.log("2")},2* 1000)

// setTimeout(()=>{console.log("3")},3* 1000)

// setTimeout(()=>{console.log("4")},4* 1000)

// setTimeout(()=>{console.log("5")},5* 1000)

// setTimeout(()=>{console.log("6")},6* 1000)

// setTimeout(()=>{console.log("7")},7* 1000)

// setTimeout(()=>{console.log("8")},8* 1000)

// setTimeout(()=>{console.log("9")},9* 1000)

// setTimeout(()=>{console.log("10")},10* 1000)

// or

// // let count=1
// // const timerId=setInterval(()=>{
// //     if(count===10)clearInterval(timerId)
// //     console.log(count)
// //     count+=1
// // },1000)

// // console.log("Before timeout")
// // setTimeout(()=>{
// //     console.log("Inside timeout")
// // },0)
// // console.log("After timeout")

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',()=>{
// if(name.value==="")return;

//     // creating element

//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
//     // providing text

//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     // appending the element

//     list.appendChild(li)
//     li.appendChild(dlt)
//     // clearing text

//     name.value=""
// })

// function greetUser(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greetUser("Alice", sayGoodbye);
// // to pass a func in a diff func as a parameter is called callback function

// console. log( "Starting homework...");
// setTimeout(() => {
//     console. log("Homework done!"); 
//     console. log("Starting dinner...");

// setTimeout (() => {
//     console. log("Dinner done!");
//     console. log( "Getting ready to go out...");

// setTimeout( () =>{
//     console.log("Going to the playground!");
//     }, 1000); // after dinner
//     }, 1500); // dinner time
//     }, 2000); // homework time

//function finishHomework( callback) {
//    console. log( "Starting homework...");
//    setTimeout(() => {
//console. log( "Homework done!");
//callback();
//},2000);
//}
//
//function eatDinner( callback) {
//    console.log( "Starting dinner..."); 
//    setTimeout( () =>{
//        console. log( "Dinner done!");
//        callback();
//    },1500);
//}
//function goToPlayground() {
//console. log( "Going to the playground!");
//}
//
//finishHomework( () => {
//    eatDinner( () => {
//        goToPlayground();
//    });
//});