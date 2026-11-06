// interface Employee {
//   name: string;
//   baseSalary: number;
// }
// const employee: Employee = {
//   name: "John Doe",
//   baseSalary: 75000, 
// };
// const employee2: Employee = {
//   name: "Mizan",
//   baseSalary: 22000, 
// };
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getSalary() {
        return this.baseSalary;
    }
}
const employee1 = new Employee("John Doe", 75000);
const employee2 = new Employee("Mizan", 22000);
console.log(employee1.getSalary()); // Output: 75000
console.log(employee2.getSalary()); // Output: 22000
console.log(employee1 instanceof Employee);
console.log(employee2 instanceof Employee);
export {};
