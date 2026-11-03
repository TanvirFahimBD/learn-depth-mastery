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

// equality


// in operator
// instanceof check
// discriminated union