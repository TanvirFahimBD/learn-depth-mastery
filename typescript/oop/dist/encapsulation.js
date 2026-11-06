// Encapsulation: protected a state and change it through methods
// Access modifier
// public
// protected
// private
// readonly
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary * 1.1; // 10% bonus
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this._baseSalary = newSalary;
    }
}
const employee1 = new Employee("John Doe", 75000);
console.log(employee1.baseSalary); // Output: 75000
console.log(employee1.salaryWithBonus); // Output: 82500
export {};
