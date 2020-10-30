/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react --watch
*/

// JSX - Javascript XML - JS Syntax extension
var template = (
  <div>
    <h1>Indesicion App!</h1> 
    <p>This is some info</p>
  
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

ReactDOM.render(templateTwo, appRoot);
