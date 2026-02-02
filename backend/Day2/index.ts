// Function parameter types and return types

function add(a:number , b:number) :number {
    return a+b;
}
console.log(add(4,3))

// function with void

function sayHello(name:string):void {
    console.log(`Hello ${name}`);
}
sayHello("Abhishek")

// Arrow function Typing

const multiply = (a:number,b:number):number => {
    return a*b;
}
console.log(multiply(3,12));

// Optional parameter(?)

function printUser(name:string ,age?:number):void {
    console.log("Name:",name);

    if(age !== undefined) {
        console.log("Age:",age);
    }
}

printUser("Abhishek",21);
printUser("Gramn");

// default parameter

function discount(price:number ,percent:number = 10):number {
    return price - (price*percent)/100;
}

console.log(discount(100))


// Rest Parameters ...(When no. of parameters are unknown)

function totalSum(...nums: number[]):number {
    return nums.reduce((acc,curr)=> acc+curr,0);
}

console.log(totalSum(10,20,30,50))

// Function type variables 
let operation:(a: number,b:number) => number;
operation = (x,y) => x+y;
console.log(operation(32,12));


// Union Types in function
function printId(id:number | string):void {
    console.log("ID:",id);
}

printId(288);
printId("idkfjha")

// Narrowing
function getLength(value:string | number) {
    if(typeof value === 'string') {
        return value.length;
    }

    return value.toString().length;
}


// Task
// 1-even no.
function isEven(num:number) :boolean {
    if(num & 1) return false;
    else return true; 
}
console.log(isEven(22))

// 2-fullName
let fullName2:(first:string,last:string)=>string;
fullName2 = (fname,lname) => {
    return `Hello ${fname} ${lname}!`;
}
function fullName(first:string,last:string):string {
    return `Hello ${first} ${last}!`
}
console.log(fullName2("Abhishek","Gupta"))

// Max of two
let maxOfTwoNumbers:(numOne:number,numTwo:number) => number;
maxOfTwoNumbers = (numOne,numTwo) => {
    return Math.max(numOne,numTwo);
}

console.log(maxOfTwoNumbers(23,54));

// Task2

function introduce(name:string,role?:string,country:string = "India"): void {
    console.log(`I ${name} is working as ${role} in ${country}`)
}

introduce("Abhishek","Developer","India")


// Task3

function average(...nums:number[]):number {
    return nums.reduce((acc,num)=> acc+num,0)/nums.length
}

console.log(average(2,1,4,5,56,7));