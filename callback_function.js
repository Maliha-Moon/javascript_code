//A callback is a function passed as an argument to another function
//When you pass a function as an argument, remember not to use parenthesis.

function display(value){
    console.log(value);
}

function add(num1, num2, myCallback){
    let sum = num1 +num2;
    myCallback(sum);
}

add(10,30,display);
