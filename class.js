/* -> class is template of javascript objects
   -> Constructor methode:
    1. have exact name 'constructor'
    2. execute automatically when an object is created
    3. used to initialize object properties
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //can add any number of method
    greet(){
        return "Hello " + this.name;
    }
    change(newName){
      this.name = newName;
    }

    // JavaScript can secure better data quality when using getters and setters.
    // It allows equal syntax for properties and methods
   // It is useful for doing things behind-the-scenes
    
   set salary(amount){  // to set, modify, change the value
    this.amount=amount;
   }

   get salary(){
    return `salasy $${this.amount}`;
   }

}

const person1 = new Person("Alexa",20);
const person2 = new Person("Aleena",25);

console.log(person1.greet());
person1.change("John"); 
console.log(person1.name);
// with get set method
person1.salary = 200000;
console.log(person1.salary);

// class expression

let Student = class{
    constructor(dep,id){
        this.dep=dep;
        this.id=id;
    }
}

const stu1 = new Student("CSE",1234);
const stu2 = new Student("EEE",6574);
console.log(stu2);
