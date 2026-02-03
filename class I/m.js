//to do: object,dom

//let obj2={
  //  name:"alex"
    //age:45
    //address:"GGN"
//}
//obj.name="bob"
//console.log(document)
//const para=document.querySelector('p')
// const para=document.getElementsByClassname('para')
// para[0].innerText="this is updates para"
// para[1].style.color="green"
// console.log(para)

//manya - event handling
// const btn=document.querySelector("button")
// btn.classList.add("btn")
// //btn.classList.remove('btn)
// //btn.classList.toggle('btn')
// function print(){
//   console.log("hello you have clicked the button")
// }

// btn.addEventListener('click',print)
// btn.removeEventListener('click',print)
// btn.addEventListener('click',()=>console.log("hello you have clicked the button"))

const click=document.querySelector("#click")
//const stop=document.querySelector("#stop")
function message(event){
  console.log("event.key")
  console.log("clicked")
}
click.addEventListener('mouseover',message)
click.addEventListener('keydown',message)
click.addEventListener('keyup',message)
//click.addEventListener('click',message)
//stop.addEventListener('click',()=>{
  //console.log("stop"
    //click.removeEventListener("click",message)
  //)
//}

//event propogation
const div=document.querySelector("container")
const div2=document.querySelector(".outer")
const btn=document.querySelector("button")

div.addEventListener('click',()=>{console.log('clicked div')},false
div2.addEventListener('click',()=>{console.log('clicked div2')},false
btn.addEventListener('click',()=>{console.log('clicked button')},false