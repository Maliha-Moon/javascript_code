// In js, every function & object has a property of their own called prototype
// prototype itself a object

const Student = {
    name: "Alexa"
};
console.log(Student); // has own prototype(object{}) chain.

/* ---Protoype Inheritance---
    *we can add new properties & methodes to a constructor function
    after declaration, using prototype.
    *And objects inherit the properties & methodes
    from a prototype
*/

function Person(name,age){
    this.name = name;
    this.age = age;
}
const person1 = new Person("John",25);
const person2 = new Person("Joy",23);

//add property using prototype
Person.prototype.gender = "Male";

//add new method using prototype
Person.prototype.fullName = function(){
    return this.name;
};

//objects will inherit 'gender' property & 'fullName' method of the prorotype!
console.log(person1.gender);
console.log(person1);
console.log(person2.fullName());

// *---Changing prototype value---*
Person.prototype.country = "USA"; //add
Person.prototype = {country: "UK"}; // changing prototype

const person3 = new Person("Rose",20);

console.log(person1.country);
console.log(person2.country);
console.log(person3.country);

/*  If a prototype value is changed, then 
    all the new objects will have the changed property value.
    all the previous created objects will have previous value.
*/

