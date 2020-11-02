// arguments object- no longer bound w/ arrow function

const add = function (a,b) {
    console.log(arguments)
    return a + b;
}

const addArrow = (a,b) => {
    // console.log(arguments); //will error. no longer have access to arguments in arrow functions
    return a + b;
}

console.log(add(1,2))
console.log(addArrow(55,34))

//this keyword - no longer bound

const user = {
    name: 'Mike',
    cities: ['Sandy', 'STG', 'Alpine', 'Ghent'],
    printPlacesLived: function (params) {
        console.log(this.name)
        console.log(this.cities)

        // const that = this
        // this.cities.forEach(function (city) {
        //     console.log(`${that.name} has lived in ${city}`) //will error because 'this' is outside the scope. workaround 1 is setting a variable "that" = "this". arrow functions fix this by using the value of the context they are created in.
        // })

        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}`)
        })
    },
    // printPlacesLivedArrow: () => { 
    //     console.log(this)
    //     this.cities.forEach((city) => { //will error because it doesnt bind its own 'this' value. it goes from local scope(the function) to parent scope
    //         console.log(`${this.name} has lived in ${city}`)
    //     })
    // }

    //**Prefered** ES6 method declaration (new)
    printPlacesLivedNew() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)//map lets you transform each item and RETURNS A NEW ARRAY. can be saved to new variable if needed
    }
};

user.printPlacesLived()
// user.printPlacesLivedArrow()
// user.printPlacesLivedNew()
console.log(user.printPlacesLivedNew())


//Challenge
// create obj multiplier. 
// numbers - arrray of numbers i.e. [1, 6]
// multiplyBy - single number i.e. 2 
// multipy - method returns new array where each number in the array has been multiplied by the multiplier value -> [2, 12]

const multiplier = {
    numbers: [1, 6, 10],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())