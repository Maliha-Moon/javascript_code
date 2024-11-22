let btn1 = document.querySelector('#btn1');
/**
 *  node.event = () =>{
 *    //handle here
 * }
 */
let a = 25;
btn1.onclick = () =>{
    console.log("btn1 was clicked")
    a++
    console.log(a);
}

let div1 = document.querySelector('#div1')
div1.onmouseover = () =>{
    console.log('you are inside div')
}

//event object

let btn2 = document.querySelector('#btn2')
btn2.onclick = (e) =>{
   console.log(e);
   console.log(e.type);
   console.log(e.target);
}

//event litseners -> same event do multiple works
// node.addEventLitsener(event,callback)
// here, callback is handler
let btn3 = document.querySelector('#btn3');
btn3.addEventListener("click", () =>{
    console.log("click - handler1");
})

btn3.addEventListener("click", (evt) =>{
    console.log("click - handler2");
    //console.log(evt);
})

let handler3 = () =>{
    console.log("click - handler3");
  
};
btn3.addEventListener("click", handler3)

btn3.addEventListener("click", () =>{
    console.log("click - handler4");
})

// btn3.removeEventListener("click",() =>{
//     console.log("click - handler3");
  
// })
// these both functions are different in memeory. that's why the event does not remove.
// to remove event, we have to pass reference of the function

btn3.removeEventListener("click",handler3)