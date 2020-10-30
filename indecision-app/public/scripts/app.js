'use strict';

/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react --watch
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

var user = {
  name: 'Mike Hanks',
  age: 30,
  location: 'St. George'
};
var userName = 'Mike';
var userAge = 30;
var userLocation = 'STG';

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    ' Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    ' Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
