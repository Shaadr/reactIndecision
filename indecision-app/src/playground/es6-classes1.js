class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hi! I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        return this.hasMajor() ? description += ` Their major is ${this.major}.` : description;
    }
}

//Traveler -> Person
//Add support for homeLocation
//Override getGreeting
//1. include original greeting.
//2. if homeLocation add "im visiting from {homeLocation}"

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        return this.homeLocation ? greeting += ` I'm visiting from ${this.homeLocation}` : greeting
    }
}

const me = new Traveler('Mike Hanks', 30, 'St. George');
console.log(me.getGreeting())

const other = new Traveler('Jordan Hanks', 34)
console.log(other.getGreeting())

// const hobo = new Traveler('Tom Jones', 239, 'Central Park')
// console.log(hobo.getGreeting())

// const jimbo = new Traveler('Jimbo Baggins', 111)
// console.log(jimbo.getGreeting())
