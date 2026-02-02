// Variables + array

let fullName:string = "Abhishek Gupta";
let phoneNumber:number = 64654644
let isStudent:boolean = true;
let skills:string[] = ["HTML","CSS","Javascript","tailwind"]
let marks: number[] = [90,89,23,43];

// function

function add(a:number,b:number) : number {
    return a+b;
}
console.log(add(23,12));

// Use unknown

let input:unknown = "Typescript";

if(typeof input === "string") {
    console.log(input.toUpperCase());
}

let value:any = 'hello';

// value = 123
// value = true
console.log(value.toUpperCase())