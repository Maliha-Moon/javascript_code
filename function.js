//JavaScript functions are defined with the function keyword.
//parameterised 
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

/**Parameter Rules
JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the passed arguments.

JavaScript functions do not check the number of arguments received.
  
 */
//we can pass value of any data type to arguments
greet("Elon", "Mask");
greet(100, 200);

//we can pass less arguments
greet("Elon"); //the missing values are set to undefined.

//we can pass more arguments
greet("Elon", "Mask", "Mr");

// *--default parameter value--*
function sum(x, y) {
    console.log(x+y); // 10+undefined = NaN
}
sum(10);
function mult(x, y=1) { 
    console.log(x*y); 
}
mult(10); //if y is not passed or undefined, then y=1
mult(10,5); //5 will replace 1

// *--function can return another function--*
function fn1(x){
    function fn2(y){
        return x*y;
    }
    return fn2;
}

let result = fn1(10); //fn2 is stored in result
console.log(result); 
let value = result(2);
console.log(value); 

// *--Arrow function--*
const add = (a,b) => a+b;
const print = () => "Hello world!";
console.log(add);
console.log(add(2,5));
console.log(print());

const arrowmult = (a,b) =>{
    console.log(a*b);
}
arrowmult(3,2);
