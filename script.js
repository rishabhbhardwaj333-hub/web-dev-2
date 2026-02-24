// console.log("Hello, World!");
// console.log(document)

// const para = document.querySelector("p")

// para.innerText="THIS IS UPDATED PARAGRAPH TEXT"
// console.log(para.innerText);

// const para = document.getElementsByClassName("para") //return html collection
// para[0].innerText="THIS IS UPDATED PARAGRAPH TEXT"
// para[1].style.color="red"
// console.log(para);

// const para = document.querySelectorAll(".para") //return node list 
//  para[0].innerText="THIS IS UPDATED PARAGRAPH TEXT"
//  para[1].style.color="red"
//  console.log(para);

//  let arr= [1,2,3,4,5]
//  const newArr= arr.forEach((ele)=>console.log(ele))

// const container = document.querySelector(".container") 
// container.innerHTML= "<h1>This is a heading</h1><p>This is a paragraph inside container div</p>"
// console.log(container)

// const btn = document.querySelector("button");
// btn.classList.add("btn")
// btn.classList.remove("btn")
// btn.classList.toggle("btn")

// function printMessage(){
//     console.log("Button Clicked");
// }

// btn.addEventListener("click", printMessage)
// btn.removeEventListener("click", printMessage)
// btn.addEventListener("click", ()=>console.log("Anonymous Function Called"))


// function  startTimer(){
//     console.log("Timer Started");
// }

// const btn = document.querySelector(".click");
// btn.addEventListener("click", startTimer);


// function stopTimer(){
//     console.log("Timer Stopped");
//     btn.removeEventListener("click", startTimer);
// }
// const stopBtn = document.querySelector(".stop");
// stopBtn.addEventListener("click", stopTimer);


// function message(){
//     console.log("Button Clicked");
// }

// const click = document.querySelector(".click");
// click.addEventListener("click", message);

// const stop = document.querySelector(".stop");
// stop.addEventListener("click", ()=>{
//     console.log("Button Stopped");
//     click.removeEventListener("click", message);
// });

// function message(){
//     console.log("Button Clicked");
// }

// const click = document.querySelector(".click");
// click.addEventListener("click", message);
// click.addEventListener("mouseover", ()=>{
//     console.log("Hovering over Click button");
// });


// const stop = document.querySelector(".stop");
// stop.addEventListener("click", ()=>{
//     console.log("Button Stopped");
//     click.removeEventListener("click", message);
// });
// stop.addEventListener("mouseover", ()=>{
//     console.log("Hovering over Stop button");
// });



// const click = document.querySelector(".click");

// function message(event){

//     console.log(event.key);
//     console.log("Button Clicked");

// }

// click.addEventListener("keyup", message);



// const form = document.querySelector("form");
// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     console.log("Form Submitted");
// });

// console.log("Script loaded");

// window.addEventListener("load", ()=>{
//     console.log("All resources finished loading!");
// });

// console.log(a); 
// // console.log(b); 


// var a = 10;
// let b = 20;

// console.log(a); 
// console.log(b); 

// function test(){
//     let c = 30;
//     console.log(c);
//     console.log("Inside Test Function");
// }

// test();

// function greet (){

//     var message = "Hello, user!";
//     console.log(message);
// }
// greet();
// console.log(message);


// function first (){
//     second ();
// }
// function second (){
//     third ();
// }
// function third (){
//     console.trace()
// }
// first ();


// console.log("first line");
// setTimeout(()=>{console.log("second line")},2000);
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");

//console.log("starting homework....");
//setTimeout(() => {
    //console.log("homewoerk done!!");
   // console.log("starting dinner....");
   // setTimeout(() => {
   //     console.log("dinner done!!");
 //       console.log("getting ready to go out");
        
        //setTimeout(() => {
      //      console.log("i am ready to go out");
    //    }, 3000);
  //      }, 3000);
//
//}, 3000);

//function finishHomework( callback) {
//console. log( "Starting homework...");
//setTimeout(() => {
//console. log( "Homework done!");
//callback();
//}, 2000);
//}
//function eatDinner( callback) {
//console.log( "Starting dinner..."); setTimeout( () =>
//{
//console. log( "Dinner done!");
//callback();
//}, 1500);
//}
//function goToPlayground() {
//console. log( "Going to the playground!");
//}

//const p=new Promise((res,rej) => {
    //let done=false
   // setTimeout(() => {
      //if(done){
       // res("it is done")
     // }
     // else{
    //    rej("not done")
  //    }
//    }, 3000)
//})
//console.log(p)


//doHomework().then((msg) => {
//  console.log(msg)
//  return eatDinner()
//}).then((msg) => {
//  console.log(msg)
//}).catch((err) => {
//  console.log(err)
//}).finally(() => {
//  console.log("go to sleep")
//})

//document.cookie="name=John; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
//document.cookie="age=30; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
//console.log(document.cookie); 

//function* generate(){
    //yield 1;
   // yield 2;
    //yield 3;
  //  let index=4;
//    while(true){
      //  yield index++;
    //    index++;
  //  }
//}
//const gen = generate();
//console.log(gen);
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());

//function add(a){
    //return function(b){
        //return function(c){
        //    return a + b + c;
      //  }
    //}
  //}

//const first = add(1);
//console.log(first)
//const second = first(2);
//console.log(second)
//const third = second(3);
//console.log(third)
//console.log(third(4));
//console.log(add(1)(2)(3));