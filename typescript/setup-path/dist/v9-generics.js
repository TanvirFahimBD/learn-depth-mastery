const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("Hello");
const numberArr = wrapInArray(42);
stringArr.map((s) => s.toUpperCase());
const userRes = {
    data: {
        name: "John Doe",
        age: 30,
    },
    success: true,
    statusCode: 200,
};
export {};
