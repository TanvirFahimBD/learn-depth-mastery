let a: undefined = undefined
let b: null = null

let userName: null | string = null
let age: null | number = null

userName = "redb";

age = 12

// console.log(userName);
// console.log(age);

const find = (id: number) : string | undefined => {
    return id === 1 ? "Rahim" : undefined;
}

// console.log(find(1));

type Pet = "cat" | "dog" | "owl";
const sound = (p: Pet) : string => {
    switch(p){
        case "cat" :  return "mew";
        case "dog" :  return "kau";
        default:  return p;
    }        
}

// console.log(sound("ls"));  

