'use strict';

function square(x) {
    return x * x;
};

// const squareArrow = x => {
//     return x * x;
// };

//consise
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(15));

// Challenge - use arrow functions
// getFirstName ('Mike Smith') -> 'Mike
// Create regualr arrow function
// Create using shorthand concise syntax

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

var getFirstNameShorthand = function getFirstNameShorthand(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName("Mike Smith"));

console.log(getFirstNameShorthand("Jordan Hanks"));
