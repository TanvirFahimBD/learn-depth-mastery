const fare = {
    car: 100,
    bus: 50,
    cng: 70
}

type Vehicle = keyof typeof fare

const getFare = (v: Vehicle) => {
    return fare[v];
}

console.log(getFare("cng"));

