/** Object methods are actions that can be performed on objects.

A method is a function definition stored as a property value.
 */

const Person = {
    firstNamr: 'Elon',
    lastNamr: 'Mask',
    //1st method
    fullName: function fullName(){
        console.log(this.firstNamr+" "+this.lastNamr);
        //if we use 'this' keyword alone, or inside a function.
        //then it will refer to the global object, that is "window" object
    },
    //another method
    address: function(){  //anonymous function
        console.log("London street,UK");
    },
     //another method
     salary(){
        console.log("salary = $10000000");
     }
};
//another method
function greet(){
    console.log("hello world!");
}

Person.greeting = greet; //assigning the greet() func in a key of object

Person.fullName();
Person.address();
console.log(Person);
Person.salary();

