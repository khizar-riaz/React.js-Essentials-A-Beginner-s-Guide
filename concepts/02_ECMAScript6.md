## ES6

- ES6 stands for ECMAScript 6.
- ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as `ECMAScript 2015`.
- React uses ES6, and you should be familiar with some of the new features like:
  1. Classes
  2. Arrow Functions
  3. Variables (let, const, var)
  4. Array Methods like .map()
  5. Destructuring
  6. Modules
  7. Ternary Operator
  8. Spread Operator

## Classes

- ES6 introduced classes.
- A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a `constructor()` method.
- The `constructor function` is called automatically when the object is initialized.



#### Method in Classes
- You can add your own methods in a class:

#### Class Inheritance
- To create a class inheritance, use the `extends` keyword.
- A class created with a class inheritance inherits all the methods from another class:

```jsx

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

```

- The super() method refers to the parent class.
- By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

## React ES6 Arrow Functions

- Arrow functions allow us to write shorter function syntax:

- Before (NOT an arrow function)

```jsx

hello = function() {
  return "Hello World!";
}

```

- After (A simple arrow function.)

```jsx

hello = () => {
  return "Hello World!";
}

```

- It gets shorter! If the function has only `one statement`, and the statement returns a value, you can remove the brackets and the return keyword:
- Arrow Functions Return Value by Default:
- This works only if the function has only one statement.

```jsx

hello = () => "Hello World!";

```

- If you have `parameters`, you pass them inside the parentheses:

```jsx

hello = (val) => "Hello " + val;

```
- In fact, if you have only one parameter, you can skip the parentheses as well:

```jsx

hello = val => "Hello " + val;

```


