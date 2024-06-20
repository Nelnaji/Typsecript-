class Department {
// private readonly id: string
    // public name : string;
    protected employees : string[] = [];

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

class ITDepartment extends Department {

constructor(id:string, public admins :string[]) {
    super(id,'IT');
    this.admins = admins;
}
}

class AccountingDepartment extends Department{

    constructor(id:string, private reports: string[]){
        super(id, 'IT')
    }
    addReport(text:string){
        this.reports.push(text);
    }
    printReport(){
        console.log(this.reports);
    }
    addEmployee(name:string) {
        if( name ==='Nawfal'){
            return;
        }
        this.employees.push(name)
    }
    printEmployees() {

        console.log(this.employees)
    }
}

const it = new ITDepartment('unique31', ['Nawfal']);

// you have to obligatorly use the object method to access the employees array
it.addEmployee('Ali');
it.addEmployee('Mohamed');

console.log(it);

it.describe();
it.printEmployeeInformation()

// const accountingCopySales = {name : 'Sales' ,describe: accounting.describe};
// accountingCopySales.describe()


const accounting = new AccountingDepartment('d2', []);




accounting.addReport('Something went wrong...');

accounting.addEmployee('Nawfal');
accounting.addEmployee('salam')
accounting.printEmployees()
accounting.printReport()

