var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('namevar', nameVar)

let nameLet = 'Jen';
//let nameLet = "Gina" -> will error
nameLet = "Gina"
console.log ('nameLet', nameLet)

const nameConst = 'Frank';
// const nameConst = 'Gunther' -> will error
// nameConst = 'Gunther' -> will error 
console.log('nameconst', nameConst)

function getPetName() {
    let petName = 'Luna';
    return petName;
}

getPetName();
// console.log('petname', petName) //-> will error b/c scope. let,const  are "block scoped". 

const fullName = "Mike Hanks";
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName) // if firstname is var, then it will print the first name twice. if const or let, it will be block scoped and this c.log will fail.