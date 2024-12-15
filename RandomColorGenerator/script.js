//generate a random color using hex code

const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
         //generate a random value
         color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let intervalId;
const startChangingColor = function(){
    /**Start a new timer only if no timer is already running */
    if(!intervalId){ 
        intervalId = setInterval(changeBGColor,1000)
    }
    
    function changeBGColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function(){
       clearInterval(intervalId);
       intervalId = null; /**there is no active interval running anymore */
}
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
