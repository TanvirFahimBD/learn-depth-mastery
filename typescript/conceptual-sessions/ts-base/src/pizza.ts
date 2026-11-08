type Toppings = "cheese" | "olive" | "corn";

export type Pizza = {
    name: string
    toppings: Toppings[]
}

export const menu: Pizza[] = [
    {
        name:"pizza 1",
        toppings: ["cheese"]
    },
    {
        name:"pizza 12",
        toppings: ["olive"]
    }
]

const makePizza =  (name: string, ...toppings: Toppings[]) => {
    return {name, toppings}
}