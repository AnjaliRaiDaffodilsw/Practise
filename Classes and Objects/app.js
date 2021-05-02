class Student {
    constructor(name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getBioData () {
        return `My name is ${this.name} , age is ${this.age} , gender is ${this.gender}`;
    }
}

class Player extends Student {
    constructor(name,age,gender,games) {
        super(name,age,gender);
        this.games = games;
    }

    // getBioData() {
    //     console.log(`My name is ${this.name} , age is ${this.age} , gender is ${this.gender} and the fav game is ${this.games}` );
    // }
    getDetails () {
        console.log(`${super.getBioData() } and I like ${this.games}`);
    }
}

let p1 = new Player("Anjali",23,"Female","Badminton");
p1.getDetails();