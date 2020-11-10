class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting(name) {
        return `Hi! I am ${this.name}`;
    }

    getDescription(string) {
        return `${this.name} is ${this.age} year(s) old!`
    }
}

const me = new Person('Mike Hanks', 30);
console.log(me.getDescription())

const other = new Person('Jordan Hanks', 34)
console.log(other.getDescription())

const anonymous = new Person()
console.log(anonymous.getDescription())