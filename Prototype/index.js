// let obj = {
//     name : "Anjali",
//     city : "Allahabad",
//     getInto() {
//         console.log(`${this.name} is from ${this.city}`);
//     }
// }

//obj.getInto();

// var User = function(firstName,lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getIntro = function() {
//         console.log(`My first name is ${this.firstName} and last name is ${this.lastName}`);
//     }

// }

// var user1 = new User("Anjali","Rai");
// User.prototype.getFirstName = function() {
//     console.log(`My first name is ${this.firstName}`);
// }
// user1.getIntro();
// user1.getFirstName();

const Vechile = function () {
    this.numOfWheels = 10;
    this.price = '10000';
    this.getPrice = function() {
      return this.price;
    }
}

Vechile.prototype.getNumWheels = function() {
    console.log(`${this.numOfWheels}`);
}

var vech1 = new Vechile();
console.log(vech1.getPrice());
// vech1.getNumWheels();
console.log(Reflect.getPrototypeOf(vech1));        
