export const data = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted programming language that is primarily used for creating interactive and dynamic web pages.",
  },
  {
    question:
      "Explain the difference between null and undefined in JavaScript.",
    answer:
      "null is a value that represents the intentional absence of any object value. undefined is a variable that has been declared but has not yet been assigned a value.",
  },
  {
    question: "What is the significance of the var, let, and const keywords?",
    answer:
      "var is function-scoped, let is block-scoped, and const is block-scoped and cannot be reassigned. They are used for variable declaration.",
  },
  {
    question: "Describe the event delegation in JavaScript.",
    answer:
      "Event delegation involves attaching a single event listener to a common ancestor instead of individual elements. Events are then handled based on delegation to improve efficiency.",
  },
  {
    question: "Explain the concept of closures in JavaScript.",
    answer:
      "Closures occur when a function is defined inside another function, allowing the inner function to access the outer function's variables. This preserves the state of the outer function.",
  },
  {
    question: "What is the prototype chain in JavaScript?",
    answer:
      "The prototype chain is a mechanism where objects in JavaScript inherit properties and methods from their prototype. It allows for property and method sharing between objects.",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous code in JavaScript?",
    answer:
      "Synchronous code executes sequentially, while asynchronous code allows tasks to be executed independently. Callbacks, Promises, and async/await are used to handle asynchronous operations.",
  },
  {
    question: "How does hoisting work in JavaScript?",
    answer:
      "Hoisting moves variable and function declarations to the top of their containing scope during the compilation phase, allowing them to be used before they are declared.",
  },
  {
    question: "Explain the concept of callback functions.",
    answer:
      "Callback functions are functions passed as arguments to another function and executed later, often used in asynchronous operations to handle the result.",
  },
  {
    question:
      "What is the difference between classical inheritance and prototypal inheritance in JavaScript?",
    answer:
      "Classical inheritance involves classes and is based on blueprint instances. Prototypal inheritance uses prototypes, where objects inherit directly from other objects.",
  },
  {
    question: "Explain the concept of 'this' in JavaScript.",
    answer:
      "this refers to the object that the function is a property of. It is a reference to the current object and can change depending on how a function is called.",
  },
  {
    question: "What are constructor functions in JavaScript?",
    answer:
      "Constructor functions are used to create and initialize objects. They are invoked with the new keyword and define object properties and methods.",
  },
  {
    question:
      "Describe the difference between Object.create and new SomeFunction() for object creation.",
    answer:
      "Object.create(proto) creates a new object with the specified prototype, while new SomeFunction() creates an instance of SomeFunction with its own properties.",
  },
  {
    question: "What is the significance of the bind method in JavaScript?",
    answer:
      "The bind method creates a new function with a specified this value and initial arguments. It's often used to set the context for a function.",
  },
  {
    question: "What are the new features introduced in ES6?",
    answer:
      "ES6 introduced arrow functions, template literals, destructuring, let and const, classes, Promises, and more.",
  },
  {
    question: "Explain the arrow functions in ES6.",
    answer:
      "Arrow functions are a concise way to write functions in ES6, with a shorter syntax and a lexically scoped this.",
  },
  {
    question: "What is destructuring in JavaScript? Provide examples.",
    answer:
      "Destructuring allows for extracting values from objects or arrays. Example: const { name, age } = person; for object destructuring.",
  },
  {
    question: "What are template literals in ES6?",
    answer:
      "Template literals are string literals allowing embedded expressions. They are enclosed by backticks (`) and can span multiple lines.",
  },
  {
    question:
      "What is the purpose of the let and const keywords introduced in ES6?",
    answer:
      "let and const are block-scoped variables. let allows reassignment, while const is constant and cannot be reassigned.",
  },
  {
    question: "Describe the async/await feature in JavaScript.",
    answer:
      "Async/await is a syntax for handling asynchronous code, making it look and behave like synchronous code, enhancing readability.",
  },
  {
    question: "Explain event bubbling and event capturing.",
    answer:
      "Event bubbling is the process where the event starts from the target element and bubbles up to the root. Event capturing is the opposite, starting from the root and trickling down to the target.",
  },
  {
    question: "How does event delegation work?",
    answer:
      "Event delegation involves attaching a single event listener to a common ancestor to manage events for multiple elements, improving performance.",
  },
  {
    question:
      "What is the difference between window.onload and document.ready?",
    answer:
      "window.onload waits for all assets to load, while document.ready (using jQuery) fires when the DOM is ready, before images are fully loaded.",
  },
  {
    question: "Explain the purpose of localStorage and sessionStorage.",
    answer:
      "localStorage and sessionStorage are used to store key-value pairs on the client side. localStorage persists even after the browser is closed, while sessionStorage is cleared when the session ends.",
  },
  {
    question: "What is the Event Loop in JavaScript?",
    answer:
      "The Event Loop is a mechanism for handling asynchronous tasks in JavaScript, managing the execution stack and callback queue.",
  },
  {
    question:
      "Explain the concept of promises and how they differ from callbacks.",
    answer:
      "Promises are objects representing the eventual completion or failure of an asynchronous operation, providing a cleaner alternative to callbacks and simplifying error handling.",
  },
  {
    question: "What is the difference between call, apply, and bind?",
    answer:
      "call and apply invoke a function immediately, while bind creates a new function with a bound context and can be invoked later.",
  },
  {
    question: "How does the typeof operator work?",
    answer:
      "The typeof operator returns a string indicating the data type of a variable or expression.",
  },
  {
    question:
      "What is the purpose of the map, reduce, and filter functions in JavaScript?",
    answer:
      "map transforms elements of an array, reduce reduces an array to a single value, and filter creates a new array with elements that pass a test.",
  },
  {
    question:
      "Explain the Same-Origin Policy and how it affects AJAX requests.",
    answer:
      "The Same-Origin Policy restricts web pages from making requests to a different domain. AJAX requests are subject to this policy, and cross-origin requests may require CORS headers.",
  },
  {
    question: "How would you debug a JavaScript application?",
    answer:
      "Use browser developer tools, console.log, breakpoints, and debugging statements. Tools like VSCode offer advanced debugging features.",
  },
  {
    question:
      "Explain the purpose of unit testing and how it is done in JavaScript.",
    answer:
      "Unit testing verifies individual units of code. Frameworks like Jest or Mocha, and assertion libraries like Chai, are commonly used for JavaScript unit testing.",
  },
  {
    question:
      "What is the role of tools like ESLint in JavaScript development?",
    answer:
      "ESLint is a static code analysis tool that helps identify and fix problems in JavaScript code, enforcing coding standards and improving code quality.",
  },
  {
    question: "What is the significance of Node.js in JavaScript development?",
    answer:
      "Node.js allows server-side JavaScript execution, enabling the development of scalable and high-performance web applications.",
  },
  {
    question: "Explain the difference between Angular, React, and Vue.js.",
    answer:
      "Angular is a complete MVC framework, React is a library for building user interfaces, and Vue.js is a progressive framework for building user interfaces.",
  },
  {
    question:
      "What is the Virtual DOM, and how does it optimize performance in React?",
    answer:
      "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to minimize direct manipulations, improving performance by efficiently updating only changed parts of the DOM.",
  },
];
