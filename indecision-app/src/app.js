/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react
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

//Create a templateTwo var JSX expression
//div
//  h1 -> Mike Hanks
//  p -> Age: 30
//  p -> Location: STG
//Render templateTwo instead of template

var templateTwo = (
  <div>
    <h1> Mike Hanks</h1>
    <p> Age: 30</p>
    <p> Location: STG</p>
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
