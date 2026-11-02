// top types
let helloWorld = "Hello, world!";
helloWorld = 32;
helloWorld.length;
const something = "Hello, world!";
// something.length; // Error: Object is of type 'unknown'.
// core types
let something2;
const num = 32;
let someStatus = "pending";
const currentUser = null;
// unit type  or void
const greet = () => {
    console.log("Hello World");
};
greet();
// sub-type of unit type
const anotherGreet = () => {
    console.log("Hello World");
    return undefined;
};
const greetings = anotherGreet();
console.log(greetings);
// bottom type
// let neverHappens: never = "test"; // Error: Type 'string' is not assignable to type 'never'.
const throwError = (message) => {
    throw new Error(message);
};
throwError("This is an error message");
export {};
