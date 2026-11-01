// const myString: string = "Hello, TypeScript!";
// const myNumber: number = 34243;
// const myBoolean: boolean = true;
// const mySymbol: symbol = Symbol("unique");
// const myBigInt: bigint = 123456789012345678901234567890n;
// const myArray: string[] = ["apple", "banana", "cherry"];
// const myObject: { name: string; age: number } = { name: "John", age: 30 };

//typesafe function
function sum(a: number, b:number): number {
  return a + b;
}
console.log(sum(50, 10)); // Output: 60


// array and tuple an readonly modifier
const strArr: string[] = ["apple", "banana", "cherry"];
const numArr: number[] = [1, 2, 3, 4, 5];
const tuple: [string, number] = ["John", 30];

//array with generic type(different way to declare array type)
const strArr2: Array<string> = ["apple", "banana", "cherry"];



//tuple - fixed length and types
const dataLatLong: [number, number] = [40.7128, -74.0060]; 

//tuple with readonly modifier - cannot change the values
const dataLatLong2: readonly [number, number] = [40.7128, -74.0060]; 


// 1-8: Optional, Default Parameters in function

// Optional parameter: firstName is optional
function fullName(lastName: string, firstName?: string) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Alice")); // Output: Alice
console.log(fullName("Alice", "John")); // Output: John Alice


// Default parameter: greeting has a default value of "Hello"
const greet = (name: string, greeting: string = "Hello") => {
    console.log(`${greeting}, ${name}!`);
};
greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!

// 1-9: Rest Parameters in function
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(sumAll(10, 20)); // Output: 30  

const logUserAction = (...args: [name: string, age: number, isActive: boolean]) => {
    const [name, age, isActive] = args;
    console.log(`User ${name} (Age: ${age}) is ${isActive ? 'active' : 'inactive'}`);
};
logUserAction("Alice", 30, true); // Output: User Alice (Age: 30) is active
logUserAction("Bob", 25, false); // Output: User Bob (Age: 25) is inactive


//1-10: Object, Type Alias and Interface
//type alias
type TUser = {
    name: string;
    age: number;
    isActive: boolean;
    Address: Address;
};

//generic type for more prefereable type alias 
type Address = {
 streetName: string;
 holdingNumber: number;
}


const user1: TUser = {
    name: "Alice",
    age: 30,
    isActive: true,
    Address: {
      streetName: "123 Main St",
      holdingNumber: 123
    }
};

// user.email = "test@gmail.com"; // Error: Property 'email' does not exist on type 'TUser'.


//interface - ts it priority to interface over type alias when both are present
interface IUser {
    name: string;
    age: number;
    isActive: boolean;
} 

const user2: IUser = {
    name: "Alice",
    age: 30,
    isActive: true
};
