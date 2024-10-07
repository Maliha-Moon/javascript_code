/* Object Destructuring in javascript is a feature that allows you
to extract the properties of an object into variables.
-> useful for assigning the properties of an object 
   to variables in a single statement.
*/

const Person = {
    firstName: "Maliha",
    lastName: "Moon",
    age: 20
};

// let fName = Person.firstName;
// let lName = Person.lastName;

/* Destructuring Syntax
   let {property1: var1, property2: var2} = Object;
   or,
    let {property1, property2} = Object;
*/

let {firstName: fName, lastName:lName} = Person;
console.log(fName);
console.log(lName);

let {firstName, lastName, age = 18} = Person;
console.log(`Property name will be variable name!`);
console.log(firstName);
console.log(lastName);
console.log(age); 
 //if there exists any 'age' property in object
 // then it will ignore default value (age = 18),
 // otherwisw, display the default value


