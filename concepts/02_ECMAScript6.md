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

## React ES6 Variables

- Before ES6 there was only one way of defining your variables: with the `var` keyword. If you did not define them, they would be assigned to the global object. Unless you were in `strict mode`, then you would get an error if your variables were undefined.

- Now, with ES6, there are three ways of defining your variables: `var`, `let`, and `const`.

#### var

  1. If you use var `outside of a function`, it belongs to the `global scope`.  
  2. If you use var `inside of a function`, it belongs to that function.
  3. If you use var `inside of a block`, i.e. a for loop, the variable is still available outside of that block.

- var has a `function scope`, not a block scope.

```jsx

var number = 5.6;

```

#### let

- let is the `block scoped` version of var, and is limited to the block (or expression) where it is defined.
- If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

- let has a `block scope`.

```jsx

let number = 2.3;

```

#### const

- const is a variable that once it has been created, its value can never change.
- The keyword `const` is a bit misleading. It does not define a `constant value`. It defines a `constant reference` to a value.

- Because of this you can NOT:
  1. Reassign a constant value
  2. Reassign a constant array
  3. Reassign a constant object
  
- But you CAN:
  1. Change the elements of constant array
  2. Change the properties of constant object

- const has a `block scope`.

```jsx

const number = 131;

```

## React ES6 Array Methods

- There are many JavaScript array methods.
- One of the most useful in React is the `.map()` array method.
- The .map() method allows you to run a function on each item in the array, returning a new array as the result.
- In React, map() can be used to generate lists.

**Generate a list of items from an array:**

```jsx

const myArray = ['one', 'two', 'three'];

const myList = myArray.map((item) => item);

myList.forEach((item) => {
  console.log(item);
});

```


