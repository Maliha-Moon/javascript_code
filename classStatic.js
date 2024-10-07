class Student{
    constructor(name){
        this.name=name;
    }
    //static method can take object as argument
    // to access the properties of object

    static greet(){   
        return `hello ${this.name}`; //cannot access object property
        //here, this refers to the class
    }

    static intro(x){   
        return `hello ${x.name}`; //can access object property
    }
}

const stu1 = new Student("Peter");
const stu2 = new Student("Harry");

console.log(Student.greet()); // hello Student
console.log(Student.intro(stu1)); //pass object as argument
console.log(Student.intro(stu2)); 

//cannot call a static method on an object
// stu1.greet(); -> error!
