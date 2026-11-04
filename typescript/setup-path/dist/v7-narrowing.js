// typeof
let x = 123;
console.log(typeof x);
// type guard
const print = (value) => {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
};
print('hello');
print(123.456);
const loggedUser = {
    name: 'John',
    address: {
        street: '123 Main St'
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error('User is null');
};
showAddress(loggedUser);
showAddress(null);
// some caveat of Type Guard
const printAll = (x) => {
    if (x !== null) {
        if (x && typeof x === 'object') {
            for (const s of x) {
                console.log(s);
            }
        }
        else if (typeof x === 'string') {
            console.log(x);
        }
        else {
            throw new Error('This should not happen');
        }
    }
};
printAll(null);
// equality
const printAll2 = (x) => {
    if (x !== null) {
        if (typeof x === 'object') {
            for (const s of x) {
                console.log(s);
            }
        }
        else if (typeof x === 'string') {
            console.log(x);
        }
    }
    console.log("");
};
printAll2("only string");
const move = (animal) => {
    if ('fly' in animal) {
        return animal.fly();
    }
    return animal.swim();
};
// instanceof check
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        return;
    }
    const date = new Date(x);
    console.log(date.toUTCString());
};
showDate(new Date());
showDate('2024-06-01T12:00:00Z');
const area = (shape) => {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    if (shape.kind === 'square') {
        return shape.sideLength ** 2;
    }
};
console.log(area({ kind: 'circle', radius: 5 }));
console.log(area({ kind: 'square', sideLength: 4 }));
export {};
