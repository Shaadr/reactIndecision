'use strict';

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

  // JSX - Javascript XML - JS Syntax extension
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? "Here are your options:" : "No Options"
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

//Challenge
//Make Button "-1" - setup minusOne function, register on click handler, log "minusOne"
//Make rest button "reset" - setup reset fucntion - log "reset" on click


var count = 0;

var minusOne = function minusOne() {
  return console.log('minusOne');
};
var addOne = function addOne() {
  return console.log('addone');
};
var reset = function reset() {
  return console.log('reset');
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
