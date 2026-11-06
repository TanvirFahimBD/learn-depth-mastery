// abstraction - every employee has a base salary, but the way they calculate their pay may differ. The Employee class provides a base implementation of the calculatePay method, while the Manager class overrides this method to provide its own implementation. This allows us to treat both Employee and Manager objects as instances of the Employee class, while still allowing them to have different behaviors when it comes to calculating their pay.
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
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this._baseSalary = newSalary;
    }
}
class Manager extends Employee {
    calculatePay() {
        return `${this.name} earns a base salary of ${this.baseSalary + 10000} !!!`;
    }
}
class Developer extends Employee {
    calculatePay() {
        return `${this.name} earns a base salary of ${this.baseSalary + 5000} !!!`;
    }
}
//directly creating an instance of an abstract class is not allowed. We can only create instances of concrete subclasses that extend the abstract class. In this case, we can create instances of the Manager and Developer classes, which are concrete subclasses of the Employee class.
// const employee1 = new Employee("Jane Smith", 90000); // Error: Cannot create an instance of an abstract class.
const manager1 = new Manager("Max Danial", 100000);
console.log(manager1.calculatePay()); // Output: Max Danial earns a base salary of 110000 !!!
const developer1 = new Developer("John Doe", 80000);
console.log(developer1.calculatePay()); // Output: John Doe earns a base salary of 85000 !!!
export {};
