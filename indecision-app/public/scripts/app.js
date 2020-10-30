'use strict';

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

  // JSX - Javascript XML - JS Syntax extension
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
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

ReactDOM.render(template, appRoot);
