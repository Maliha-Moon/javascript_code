// In js, constructor function is used to create multiple objects of same type(property-value same).
// it works like 'blueprint' of objects.
//It is considered good practice to name constructor functions with an upper-case first letter.
// 'new' keyword is used to create new object

function Person(first,last,age){
     this.firstName = first,
     this.lastName = last,
     this.age = age,
     this.fullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
     }
}

const Jakarburg = new Person("Mark","Jakarburg",40); //now, 'this' will refer to Jakarburg object
const Elon = new Person("Elon","Musk",35); //now, 'this' will refer to Elon object

console.log(Jakarburg);
console.log(Elon);

//we can add new property to any object
Elon.country = "USA";
console.log(Elon);

// *--we cannot add new properties to Constructor function(blueprint)
console.log(typeof(Person));

// *--built-in constructor func--*
/* String(),Array(), Number(), Boolean(),Date(),Map(),Set()
 *--Math() is global object--*
*/
