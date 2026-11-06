// Encapsulation: like a manager in an employee with an additional responsibility. who is also an employee but extends the employee responsibilities.

// private properties are not accessible outside the class, but can be accessed through public methods (getters and setters).

// class Employee { 
//   constructor(public name: string, private _baseSalary: number) {
//   }

//   get baseSalary(): number {
//     return this._baseSalary;
//   }  

//   set baseSalary(newSalary: number) {
//     if (newSalary < 0) {
//       throw new Error("Salary cannot be negative");
//     }
//     this._baseSalary = newSalary;
//   }

//   describe(): string {
//     return `${this.name} earns a base salary of ${this.baseSalary}`;
//   }
// } 


// class Manager extends Employee {
//   constructor(name: string, baseSalary: number, private teamMemberCount: number) {
//     super(name, baseSalary);
//     this.teamMemberCount = teamMemberCount;
//   }

//   describe(): string {
//     return `${this.name} earns a base salary of ${this.baseSalary} and has ${this.teamMemberCount} team members`;
//   }
 
// }

// // Example usage:
// const employee1 = new Employee("Jane Smith", 90000);
// const manager1 = new Manager("John Max", 93000, 20); 
// console.log(employee1.describe()); // Output: Jane Smith earns a base salary of 90000
// console.log(manager1.describe()); // Output: John Max earns a base salary of 93000 and has 20 team members


// protected properties are accessible within the class and its subclasses, but not outside of them.

class Employee { 
  constructor(public name: string, protected _baseSalary: number) {
  }

  // get baseSalary(): number {
  //   return this._baseSalary;
  // }  

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earns a base salary of ${this._baseSalary}`;
  }
} 


class Manager extends Employee {
  constructor(name: string, baseSalary: number, private teamMemberCount: number) {
    super(name, baseSalary);
    this.teamMemberCount = teamMemberCount;
  }

  describe(): string {
    return `${this.name} earns a base salary of ${this._baseSalary} and has ${this.teamMemberCount} team members`;
  }
 
}

// Example usage:
const employee1 = new Employee("Jane Smith", 90000);
const manager1 = new Manager("John Max", 93000, 20); 
console.log(employee1.describe()); // Output: Jane Smith earns a base salary of 90000
console.log(manager1.describe()); // Output: John Max earns a base salary of 93000 and has 20 team members