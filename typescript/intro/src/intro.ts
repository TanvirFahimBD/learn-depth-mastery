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