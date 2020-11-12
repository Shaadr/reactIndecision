class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting(name) {
        return `Hi! I am ${this.name}`;
    }

    getDescription(string) {
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

        return this.hasMajor() ? description += ` Their major is ${this.major}.` : description

        // if (this.hasMajor()) {
        //     description += ` Their major is ${this.major}.` 
        // }

        // return description
    }
}

const me = new Student('Mike Hanks', 30, 'Computer Science');
console.log(me.hasMajor())
console.log(me.getDescription())

const other = new Student('Jordan Hanks', 34)
console.log(other.hasMajor())
console.log(other.getDescription())
