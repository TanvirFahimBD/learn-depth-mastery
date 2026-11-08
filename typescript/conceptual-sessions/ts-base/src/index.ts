let heroName: string = "Spider Man";
let power: number = 20000;
let canFly: boolean = true;
let snacks: string[] = ["popcorn", "chips"];

//literal type
type Grade = "A" | "B" | "C" | "D";
type id = string | number;

let g: Grade = "D";


type Student = {
    readonly id: number
    name: string
    age: number
    roll: number
    className?: string
}

const s1: Student = {
    id: 1,
    name: "Tanvir",
    age: 23,
    roll: 1,
    className: "ten"
}

const s2: Student = {
    id: 2,
    name: "Tanvir2",
    age: 26,
    roll: 2
}

// s2.id = 23; //readonly not changeable
// console.log(s2.id);

type hasName = {name: string}
type hasRoll = {roll: number}
type hasFee = {fee: number}

type FullStudent = hasName & hasRoll & hasFee & {grade: Grade}

const fullS: FullStudent = {
    name: "",
    roll: 5,
    fee: 500,
    grade: "B" 
}

type BikashPay = {method: "bikash", number: number};
type CardPay = {method: "card", cardNo: number, expDate: string, cvc: number};
type CashPay = {method: "cash"}

type Payment = BikashPay | CashPay | CardPay
function pay(p: Payment) {
    if(p.method === "bikash") console.log(`Send to bikash number ${p.number}`);
    if(p.method === "card") console.log(`Send to bikash number ${p.cvc}`);    
    console.log("play cash");
}

// pay({method: "bikash", number: 12893718})
// pay({method: "cash"})

function greet(name: string, mood?: string, emoji= "happy"){
    console.log(`${emoji} ${name} is ${mood ?? "okay"} `);    
}
greet("Tanvir", "happy", ":)");