// class User {
//     constructor(firstName,lastName,credits) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.credits = credits;
//     }
//     getFullName () {
//         console.log(`My first name is ${this.firstName} and last name is ${this.lastName}`);
//     }
//     editName(newName) {
//         const myName = newName.split(' ');
//         this.firstName = myName[0];
//         this.lastName = myName[1];
//     }

// }

// const user1 = new User('Anjali','Rai',23);
// user1.getFullName();
// user1.editName('Vidhy Rai');
// user1.getFullName();


class Vechile {
    vechileList = [];
    constructor(numOfWheels , priceOfVechile) {
        this.numOfWheels = numOfWheels;
        this.priceOfVechile = priceOfVechile;
    }
    
    getFullDetails () {
        let  details = `The num of wheels in the vechile is ${this.numOfWheels} and price is ${this.priceOfVechile}`;
        return details;
    }
    buyVechiles(vechileName) {
        this.vechileList.push(vechileName);
    }
    getVechileList() {
      console.log(this.vechileList);
    }
}

const v1 = new Vechile(10,20000);
console.log(v1.getFullDetails());
v1.buyVechiles('suzuki');
v1.getVechileList();