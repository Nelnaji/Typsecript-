// Code goes here!
type Admin = {
    name:string;
    privileges:string[];
};

type Employee  = {
    name:string;
    startDate: Date;
}

type ElevatedEmployee = Admin  & Employee ;
// interface ElevatedEmployee extends Admin, Employee{}


const e1: ElevatedEmployee = {
    name: "Nawfal",
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
// intersection types, can be useful
type Universal = Combinable & Numeric;

// what are type guards ? 

function add(a:Combinable, b:Combinable){

    if(typeof a === 'string' || typeof b === "string") {
        return a.toString()  b.toString();
    }
return a+ b;
}

type UnknownEmployee = Employee  | Admin;

function printEmployeeInformation(emp:UnknownEmployee){
    console.log(`Name: ${emp.name}`);
    if ('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`)
    }
    if('startDate' in emp){
        console.log(`The start date is: ${emp.startDate}`)
    }
}