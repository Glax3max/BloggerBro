// Enums

enum PaymentStatus {
    pending ="pending",
    success = "success",
    failed = "failed",
}

let payment:PaymentStatus = PaymentStatus.pending;

console.log(payment)

// Enum vs Union literal types
type role = "admin" | "viewers" | "editor";


enum RoleEnum {
    Admin = "admin",
    User = "user",
    Guest = "guest",
}


// Type guards

function printValue(val:string|number) {
    if(typeof val === "number") {
        console.log(val * 100)
    }else {
        console.log(val.toUpperCase());
    }
}

printValue("car")

// in operation

type Admin = {name:string; permission:string[]};
type User = {name:string; age:number};

function checkPerson(person:Admin|User) {
    if("permission" in person) {
        console.log(person.permission)
    }else{
        console.log(person.age)
    }
}
checkPerson({name:"Abhis",permission:["dash","payment"]});


// instanceof (for classes)

class Car {
    drive() {
        console.log("Driving Car..");
    }
}

class Bike {
    ride() {
        console.log("Riding Bike..")
    }
}

function move(vehicle: Car|Bike) {
    if(vehicle instanceof Car) {
        vehicle.drive();
    } else {
        vehicle.ride();
    }
}

type User1 = {
    name:string;
    email:string;
    age:number;
}

type UpdateUser = Partial<User1>;

const update1: UpdateUser = {
    email:"new@gmail.com",
}