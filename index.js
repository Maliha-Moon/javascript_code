 /* console
 provides access to the browser’s debugging console
 log() 
 methods of the console object. 
 It outputs a message, value, or object to the console*/
 console.log('Hello World');

// // **declare var**
// //by default variable is undefined
let name = 'MOON';
console.log(name);

// let color=null; // primitive & "object" type

//object = collection of values,properties
let Person = {
    // property or key: value
    name: 'JOY',
    age: 23,
    salary: 10000,
    isPass: true
};

//dot notation
Person.name = 'Rayhan';
console.log(Person.name);
//bracket notation
Person['name'] = 'Maliha';
console.log(Person["name"])

Person['age'] =Person['age']+1;
console.log(Person.age);

