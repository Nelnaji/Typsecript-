class Department {
// private readonly id: string
    // public name : string;
    private employees : string[] = [];

    constructor(private readonly id: string,public name:string) {
            // this.id = id;
            // this.name=name;
    }

    describe(this: Department) {
        console.log(`Department : ${this.name} ${this.id}`)
    }

    addEmployee(employee: string) {

        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    
}




const accounting = new Department('unique31', 'Accounting');

// you have to obligatorly use the object method to access the employees array
accounting.addEmployee('Ali');
accounting.addEmployee('Mohamed');

console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation()
// const accountingCopySales = {name : 'Sales' ,describe: accounting.describe};
// accountingCopySales.describe()