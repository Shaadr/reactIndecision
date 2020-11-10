class Person {
    constructor(name = 'Anonymous') {
        this.name = name
    }

    getGreeting(name) {
        return `Hi! I am ${this.name}`;
    }
}

const me = new Person('Mike Hanks');
console.log(me.getGreeting())

const other = new Person('Jordan Hanks')
console.log(other.getGreeting())

const anonymous = new Person()
console.log(anonymous.getGreeting())