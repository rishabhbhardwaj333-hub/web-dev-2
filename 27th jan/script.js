// var a =678
// let b=567
// console.log(a)
// console.log(b)
// // // the above is global execution context
// function print(){
//     let c=63
//     console.log(c)
//     console.log("inside fn")
// }
// print()
// the above is function execution context

// function first{}{
//     second{}
// }
// function second{}{
//     third{}
// }
// function third{}{
//     console.trace{}
// }

// let total =100
// function calculate(){
//     console.log(total)
//     let total=50
// }
// calculate()

// the below is an example of asynchronous programming
console.log("first line")
setTimeout(()=>{console.log("line after 50 sec")},2000)
console.log("second line")

