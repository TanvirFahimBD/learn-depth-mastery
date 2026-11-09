const first = <T>(arr : T[]) => {
    return arr[0];
}

// console.log(first(['10', '20', '30', '40']));
// console.log(first([10, 20, 30]));

interface LunchBox<T> {
    food: T
}

const mylunchBox : LunchBox<{
    name: string,
    size: string,
    price: number,
}> = {
    food: {
        name: "Cucumber",
        size: "3`",
        price: 33,
    }
}

const mylunchBox2 : LunchBox<{
    name: string, 
}> = {
    food: {
        name: "jinjar", 
    }
}

console.log(mylunchBox2);

type ApiResponse<T> = {
    success: boolean,
    data: T
}

type StudentResponse = ApiResponse<{name: "Tanvir", age: 23, profession:"Student"}>

type ErrorResponse = ApiResponse<{code: "404", message: "Not found"}>
