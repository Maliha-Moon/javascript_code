class Person {
    constructor(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    //private method
    #fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // static private method
    static #age(x) {
        return `${x.age} years old.`
    }
    display(Person) {
        console.log(this.#fullName()); //call private method
        console.log(Person.#age(this)); //this refers to object
    }

}

const Jakarburg = new Person("Mark", "Jakarburg", 40);
Jakarburg.display(Person);