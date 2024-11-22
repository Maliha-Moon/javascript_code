let btnMode = document.querySelector("#mode")

//by variable
let currMode = 'light'
let body = document.querySelector('body')

btnMode.addEventListener('click', () => {
    if (currMode == 'light') {
        currMode = 'dark';
        //body.style.backgroundColor = "black";   //by js
        //by css (class)
        body.classList.add("dark") ; 
        body.classList.remove("light") ; 
    }

    else {
        currMode = 'light';
        //body.style.backgroundColor = "white";  //by js
        //by css(class)
        body.classList.add("light"); 
        body.classList.remove("dark") ;  
    }
    console.log(currMode)
})