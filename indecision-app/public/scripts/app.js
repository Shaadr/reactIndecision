'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('namevar', nameVar);

var nameLet = 'Jen';
//let nameLet = "Gina" -> will error
nameLet = "Gina";
console.log('nameLet', nameLet);

var nameConst = 'Frank';
// const nameConst = 'Gunther' -> will error
// nameConst = 'Gunther' -> will error 
console.log('nameconst', nameConst);

function getPetName() {
    var petName = 'Luna';
    return petName;
}

getPetName();
console.log('petname', petName); //-> will error b/c scope. let,const  are "block scoped". 

var fullName = "Mike Hanks";
