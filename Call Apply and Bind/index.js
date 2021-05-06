let names = {
    firstName : "Anjali",
    lastName : "Rai"
}

let printName = function (state,age) {
    console.log(`My first name is ${this.firstName} , last name 
    is ${this.lastName} ,I am ${age} years old and I am from ${state}`);
}

let name2 = {
    firstName : "Vidhya",
    lastName : "Rai"
}

//printName.call(name2,"Allahabad");
//printName.apply(names,["Bihar",23]);
let res = printName.bind(names,"Bihar",23);
res();