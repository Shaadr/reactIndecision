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
console.log('petname', petName) //-> will error b/c scope. let,const  are "block scoped". 

var fullName = "Mike Hanks";