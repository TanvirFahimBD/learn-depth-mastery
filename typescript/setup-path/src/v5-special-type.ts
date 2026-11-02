// top types
let helloWorld : any = "Hello, world!";
helloWorld = 32;
helloWorld.length;
const something: unknown = "Hello, world!";
// something.length; // Error: Object is of type 'unknown'.

// core types
let something2: void;
const num: number = 32;
// something2 = num; // Error: Type 'number' is not assignable to type 'void'.
type Status = "pending" | "success";
let someStatus : Status = "pending";


// nullish types
interface User {
    name : string;
}
type LoggedInUser = User | null;
const currentUser: LoggedInUser = null;

// unit type  or void
const greet = () => {
    console.log("Hello World");
}
greet();

// sub-type of unit type
const anotherGreet = ():undefined => {
    console.log("Hello World");
    return undefined;
}
const greetings = anotherGreet();
console.log(greetings);

// bottom type
// let neverHappens: never = "test"; // Error: Type 'string' is not assignable to type 'never'.
const throwError = (message: string): never => {
    throw new Error(message);
}
throwError("This is an error message"); 
