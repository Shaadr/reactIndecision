/*This file is complied via babel command.
  from /indesicion-app run: 
  babel src/app.js --out-file=public/scripts/app.js --presets-env,react --watch
*/

// JSX - Javascript XML - JS Syntax extension
var template = <p>Testing babel compile and watch</p>
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
