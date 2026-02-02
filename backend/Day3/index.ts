// Object + Interfaces(Important for react/nextjs)

// 1.Object Typing Basics

let user: {name:string;age:number;isStudent:boolean} = {
    name:"Abhishek",
    age:23,
    isStudent:true
}

console.log(user.name)

// Reusable Object types
        // Using type
type User2 = {
    name:string;
    age:number;
    isStudent:boolean;
    };

const User3:User2  = {
    name:"Raja",
    age:33,
    isStudent:true
}

console.log(User3.age)


// interface (Most used in teams)

interface User4 {
    name:string ;
    age:number;
    isStudent:boolean;
}

const user4:User4 = {
    name:"Gupta",
    age:23,
    isStudent:true
}

console.log(user4.isStudent)

// Object and optional property

interface student {
    name:string;
    age:number;
    college?:string;
}

const student1:student = {
    name:"Abhishek",
    age:34,
    college:"GU",
}

console.log(student1)

// Read Only property
interface fireman {
    readonly name:string;
    age:number;
    isPumpOperator:boolean
}

const fireman1:fireman = {
    name:"Brijesh",
    age:234,
    isPumpOperator:true
}

console.log(fireman1) 

// Nested Object (Rest API types)

interface Profile {
    name:string;
    address : {
        city:string,
        street:string,
        pinCode:number
    }
}


const profile1:Profile = {
    name:"Abhishek",
    address: {
        city:"Hazaribag",
        street:"chatra-chouparan road",
        pinCode:28332
    }
}

console.log(profile1)


// Array of Objects

interface Expenses {
    title:string;
    amount:number;
    category:string;
}

const expenses: Expenses[] = [
    {title:"Biscuit",amount:43,category:"food"},
    {title:"shampoo",amount:423,category:"personal care"}
]
console.log(expenses)


// Task1

interface User {
    readonly id:number;
    name:string;
    email:string;
    role:('admin'|'user');
    isVerified:boolean;
}

const user1:User =  {
    id:7634,
    name:"rah",
    email:"rah@gmail.com",
    role:'admin',
    isVerified:true
}

const user2:User = {
    id:32,
    name:'piya',
    email:'piya@gmail.com',
    role:'user',
    isVerified:false
}
console.log(user1)
console.log(user2)


// Task 2

interface Expen {
    id:string;
    title:string;
    amount:number;
    category:string;
    createdAt:string;
    notes?:string;
}

const expenses1:Expen[] = [
    {id:"1",title:"biscuit",amount:23,category:"food",createdAt:"1st june",notes:"Its good as a evening snacks"},
    {id:"2",title:"biscuit2",amount:231,category:"food",createdAt:"14st june",notes:"Its good as a evening snacks"},
    {id:"3",title:"biscuit3",amount:231,category:"food",createdAt:"13st june",notes:"Its good as a evening snacks"},
    {id:"4",title:"biscuit4",amount:2343,category:"food",createdAt:"21st june",notes:"Its good as a evening snacks"},
    {id:"5",title:"biscuit5",amount:2312,category:"food",createdAt:"18st june",notes:"Its good as a evening snacks"},
]

console.log(expenses1)

// Task3

function printUserDetails(user:User) :void {
    console.log(`${user.name}  (${user.role}) - ${user.email}`)
}

printUserDetails({id:21,name:"Abhishek",email:"abhishek@gmail.com",role:"admin",isVerified:true})