import { menu } from "./pizza";
function bake(p) {
    console.log(`${p.name} baked with ${p.toppings}`);
}
// bake({"name": "pizza1", "toppings": ["olive"]})
bake(menu[0]);
