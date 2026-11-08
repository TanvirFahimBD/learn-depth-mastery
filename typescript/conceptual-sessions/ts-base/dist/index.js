let heroName = "Spider Man";
let power = 20000;
let canFly = true;
let snacks = ["popcorn", "chips"];
let g = "D";
const s1 = {
    id: 1,
    name: "Tanvir",
    age: 23,
    roll: 1,
    className: "ten"
};
const s2 = {
    id: 2,
    name: "Tanvir2",
    age: 26,
    roll: 2
};
const fullS = {
    name: "",
    roll: 5,
    fee: 500,
    grade: "B"
};
function pay(p) {
    if (p.method === "bikash")
        console.log(`Send to bikash number ${p.number}`);
    if (p.method === "card")
        console.log(`Send to bikash number ${p.cvc}`);
    console.log("play cash");
}
// pay({method: "bikash", number: 12893718})
// pay({method: "cash"})
function greet(name, mood, emoji = "happy") {
    console.log(`${emoji} ${name} is ${mood ?? "okay"} `);
}
greet("Tanvir", "happy", ":)");
export {};
