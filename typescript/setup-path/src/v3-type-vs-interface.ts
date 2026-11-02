// type alias vs interface


// type alias is more connected to literal, union, tuples, primitive types
//type combine by 
type Vehicle = {
    brand: string;
};

type Car = Vehicle & {
    model: string;
};

const car: Car = {
    model: "Corolla",
    brand: "Toyota"
}




// Interface is generally conntected to objects 
//interface not assing by equal
//union not allowed in interface
interface Animal{
    species: string;
}

interface Cat extends Animal{
    purrs: boolean;
}

interface Dog extends Animal{
    barks: boolean;
}

type Pet = Cat | Dog;

const myPet: Pet = {
    species: "cat",
    purrs: true
};

//interface can be merged, type alias cannot
interface IEmployee {
    id: number;
}
interface IEmployee {
    name: string;
}

const employee: IEmployee = {
    id: 1,
    name: "John Doe"
};