/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react --watch
*/

// only render the subtitle (and p tag) if subtitle exist - logical && operator
// add options array to app object with two items
// render new p tag - render if options.length > 0 "here are your options" : "No options"

var app = {
  title: 'Indesicion App',
  subtitle: 'Making the hard decisions for you!',
  options: ['One', 'Two']
}

// JSX - Javascript XML - JS Syntax extension
var template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
  
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);

// -----------------------------

var user = {
  name: 'Mike Hanks',
  age: 30,
  location: 'St. George'
}

function getLocation(location) {
  return location ? <p>Location: {location}</p> : undefined
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
    {getLocation(user.location)}
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
