console.log('App.js is running!')

// JSX - Javascript XML - JS Syntax extension
var template = <p>This is JSX from app.js</p>;
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)

/* babeljs.io will compile this code to browser readable code. The above compiles to: 

"use strict";

var template = React.createElement(
    "p", 
    null,
     "This is JSX from app.js"
     );
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

*/