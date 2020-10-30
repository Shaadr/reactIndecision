'use strict';

/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react
*/

// JSX - Javascript XML - JS Syntax extension
var template = React.createElement(
  'h1',
  null,
  'Indesicion App!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
