/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react --watch
*/

//create app object -> title & subtitle properties
//use title/subtitle in template
//render template

var app = {
  title: 'Indesicion App',
  subtitle: 'Making the hard decisions for you!'
}

// JSX - Javascript XML - JS Syntax extension
var template = (
  <div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle}</p>
  
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);


var user = {
  name: 'Mike Hanks',
  age: 30,
  location: 'St. George'
}
var userName = 'Mike'
var userAge = 30
var userLocation = 'STG'

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p> Age: {user.age}</p>
    <p> Location: {user.location}</p>
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
