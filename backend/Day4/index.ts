// Type Alias + Intersection + Literal Types + as const (Real TS Power)

// 1.Type Alias (type)

type Username =  string;

let user:Username = "Abhishek";

// 2.Literal types

type Role = "admin" | "user" | "manager";

let myRole:Role = "admin";


// 3.Union types Recap (|)

type ID = string | number;

let id1: ID = 10;
let id2: ID = "A10";


// Intersection Types (&) 

type BasicUser = {
    name:string;
    email:string;
};


type admin = {
    role:"admin";
    permissions:string[];
};

type AdminUser = BasicUser & admin;

const admin1: AdminUser = {
    name:"Abhishek",
    email:"abhishek@gmail.com",
    role:"admin",
    permissions:["create","delete"],
}

// 5. as const 

const user3 = {
    name:"Abhishek",
    role:"admin",
} as const; 

console.log( typeof user3.name)


// task1
type role = "admin" | "user" | "guest"

const user1:role = 'user';


// task2

type Person = {
    name:string;
    age:number;
}

type Employee = {
    name:string;
    company:string;
}

type EmployeeProfile = Person & Employee;

const employeeProfile1 = {
    name:"Abhishek",
    age:24,
    company:"Google"
}


// task3
type Input = string|number;

function processInput(val:Input) :string {
    if(typeof val === 'string') return val.toUpperCase();
    else return (val*val).toString();
}

console.log(processInput("Hello"))
console.log(processInput(12))
