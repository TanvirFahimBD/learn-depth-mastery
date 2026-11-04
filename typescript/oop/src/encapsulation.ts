// Encapsulation: protected a state and change it through methods

// Access modifier
// public
// protected
// private

// readonly

class Employee { 
  constructor(public name: string, private _baseSalary: number) {
  }

  get baseSalary(): number {
    return this._baseSalary;
  } 

  get salaryWithBonus(): number {
    return this._baseSalary * 1.1; // 10% bonus
  } 

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._baseSalary = newSalary;
  }
} 

const employee1 = new Employee("John Doe", 75000);
console.log(employee1.baseSalary); // Output: 75000
console.log(employee1.salaryWithBonus); // Output: 82500
