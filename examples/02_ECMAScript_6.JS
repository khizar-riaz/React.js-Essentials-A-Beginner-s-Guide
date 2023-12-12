
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

//React ES6 Destructuring
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(12, 4);

console.log("Sum: " + add);
console.log("Difference " + subtract);
console.log("Product: " + multiply);
console.log("Quotient " + divide);


//destructure deeply nested objects by referencing the nested object
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';

    console.log (message);
}