"use strict";

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
