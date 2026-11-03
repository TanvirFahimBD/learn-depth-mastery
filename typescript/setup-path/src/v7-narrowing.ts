// typeof
let x = 123;
console.log(typeof x);

// type guard
const print = (value: string | number) => {
    if(typeof value === 'string') {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
print('hello');
print(123.456);

// truthiness
type User = {
    name: string;
    address: {
        street: string;
    }
} | null;
const loggedUser : User = {
    name: 'John',
    address: {
        street: '123 Main St'
    }
};
const showAddress = (user: User) => {
    if(user && user.address) {
        console.log(user.address.street);
        return;
    } 
    throw new Error('User is null');
}
showAddress(loggedUser);
showAddress(null);

// some caveat of Type Guard
const printAll = (x: string | string[] | null) => {
    if(x !== null) {
        if(x && typeof x === 'object') {
            for(const s of x) {
                console.log(s);
            }               
        } else if(typeof x === 'string') {
            console.log(x);
        } else {
            throw new Error('This should not happen');
        }
    }
}
printAll(null);

// equality
const printAll2 = (x: string | string[] | null) => {
    if(x !== null) {
        if(typeof x === 'object') {
            for(const s of x) {
                console.log(s);
            }               
        } else if(typeof x === 'string') {
            console.log(x);
        }  
    }
    console.log("");    
}
printAll2("only string");

// in operator
type Bird = {fly: () => void};
type Fish = {swim: () => void};
const move = (animal: Bird | Fish) => {
    if('fly' in animal) {
        return animal.fly();
    }
    return animal.swim();
}

// instanceof check
const showDate = (x: Date | string) => {
    if(x instanceof Date) {
        console.log(x.toUTCString());
        return;
    } 

    const date = new Date(x);
    console.log(date.toUTCString());
}
showDate(new Date());
showDate('2024-06-01T12:00:00Z');

// discriminated union 
interface Circle {
    kind: 'circle';
    radius: number;
}
interface Square {
    kind: 'square';
    sideLength: number;
}
type Shape = Circle | Square;
const area = (shape: Shape) => {
    if(shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    if(shape.kind === 'square') {
        return shape.sideLength ** 2;
    }
}
console.log(area({kind: 'circle', radius: 5}));
console.log(area({kind: 'square', sideLength: 4}));