type Toppings = "cheese" | "olive" | "corn";

type Pizza = {
    name: string
    toppings: Toppings[]
}

const menu: Pizza[] = [
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