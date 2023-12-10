
//....................................Classes Examples......................................
//Class example in ES6
class Person {
    constructor(name) {
        this.firstName = name;
    }
    //Method in class
    PersonProfile() {
        console.log ("My name is " + this.firstName);
        }
}

//create objects using the Person class:
const personOne = new Person("Khizar");
console.log(personOne.firstName);

//calling class method
personOne.PersonProfile();


//Inheritance in ES6
class Person {
    constructor(name) {
        this.name = name;
    }
    //Method in class
    PersonProfile() {
        return "My name is " + this.name;
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
    Studycourse() {
        return this.PersonProfile() + ', My study course is ' + this.course;
    }
}

const studentOne = new Student("Khizar", "Software Engineering");
console.log(studentOne.Studycourse());