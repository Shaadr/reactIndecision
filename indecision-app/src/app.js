/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react --watch
*/

// only render the subtitle (and p tag) if subtitle exist - logical && operator
// add options array to app object with two items
// render new p tag - render if options.length > 0 "here are your options" : "No options"

const app = {
  title: 'Indesicion App',
  subtitle: 'Making the hard decisions for you!',
  options: ['One', 'Two']
}

// JSX - Javascript XML - JS Syntax extension
const template = (
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


let count = 0;
const addOne = () => {
  console.log('addone')
}
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
  </div>
);

console.log(templateTwo)

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
