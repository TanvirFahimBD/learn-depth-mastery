// polymorphism - same method in both classes, but different implementation.

class Employee { 
  constructor(public name: string, private _baseSalary: number) {
  }

  get baseSalary(): number {
    return this._baseSalary;
  }  

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._baseSalary = newSalary;
  }

  // calculatePay(): string {
  //   return `${this.name} earns a base salary of ${this._baseSalary} !!!`;
  // }

  calculatePay(taxRate: number): string {
    return `${this.name} earns a base salary of after giving tax: ${this._baseSalary - (this._baseSalary * taxRate)} !!!`;
  }
} 


class Manager extends Employee {
  calculatePay(): string {
    return `${this.name} earns a base salary of ${this.baseSalary + 10000} !!!`;
  }
}

// same constructor as the parent class, so we don't need to define it again in the child class.

// const employee1 = new Employee("Jane Smith", 90000);
// console.log(employee1.calculatePay()); // Output: Jane Smith earns a base salary of 90000 !!!
// const manager1 = new Manager("Max Danial", 100000);
// console.log(manager1.calculatePay()); // Output: Max Danial earns a base salary of 110000 !!!

// This is an example of polymorphism in action. The calculatePay method is defined in both the Employee and Manager classes, but they have different implementations. When we call the calculatePay method on an instance of Employee, it uses the implementation defined in the Employee class. When we call the calculatePay method on an instance of Manager, it uses the implementation defined in the Manager class. parent can have extra parameters in the method, but child can have less parameters in the method. This is an example of polymorphism in action. The calculatePay method is defined in both the Employee and Manager classes, but they have different implementations. When we call the calculatePay method on an instance of Employee, it uses the implementation defined in the Employee class. When we call the calculatePay method on an instance of Manager, it uses the implementation defined in the Manager class. parent can have extra parameters in the method, but child can have less parameters in the method.

const employee1 = new Employee("Jane Smith", 90000);
console.log(employee1.calculatePay(0.2)); // Output: Jane Smith earns a base salary of after giving tax: 72000 !!!
const manager1 = new Manager("Max Danial", 100000);
console.log(manager1.calculatePay()); // Output: Max Danial earns a base salary of 110000 !!!