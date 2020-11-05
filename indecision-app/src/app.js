/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react --watch
*/

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

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);