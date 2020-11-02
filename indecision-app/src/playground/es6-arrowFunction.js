function square(x) {
    return x * x;
};

// const squareArrow = x => {
//     return x * x;
// };

//consise
const squareArrow = x => x * x;

console.log(squareArrow(15));

// Challenge - use arrow functions
// getFirstName ('Mike Smith') -> 'Mike
// Create regualr arrow function
// Create using shorthand concise syntax

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

const getFirstNameShorthand = fullName => fullName.split(' ')[0]

console.log(getFirstName("Mike Smith"))

console.log(getFirstNameShorthand("Jordan Hanks"))