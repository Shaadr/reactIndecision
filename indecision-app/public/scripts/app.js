'use strict';

/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react
*/

// JSX - Javascript XML - JS Syntax extension
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indesicion App!'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item one'
    ),
    React.createElement(
      'li',
      null,
      'item two'
    )
  )
);

//Create a templateTwo var JSX expression
//div
//  h1 -> Mike Hanks
//  p -> Age: 30
//  p -> Location: STG
//Render templateTwo instead of template

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' Mike Hanks'
  ),
  React.createElement(
    'p',
    null,
    ' Age: 30'
  ),
  React.createElement(
    'p',
    null,
    ' Location: STG'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
