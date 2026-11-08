export const menu = [
    {
        name: "pizza 1",
        toppings: ["cheese"]
    },
    {
        name: "pizza 12",
        toppings: ["olive"]
    }
];
const makePizza = (name, ...toppings) => {
    return { name, toppings };
};
