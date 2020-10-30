/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react
*/

// JSX - Javascript XML - JS Syntax extension
var template = <h1>Indesicion App!</h1>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
