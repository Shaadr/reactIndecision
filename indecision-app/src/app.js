/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react --watch
*/

const app = {
  title: 'Indesicion App',
  subtitle: 'Making the hard decisions for you!',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}

const renderApp = () => {
  // JSX - Javascript XML - JS Syntax extension
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
      <p>{app.options.length}</p>
      <ol>
        <li>item one</li>
        <li>item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
}

renderApp();
//Challenge:
//Create render fn that renders the new jsx
//call it right away
//call it after options array added to.