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

// const numbers = [55, 101, 1000]

const removeAllOptions = () => {
  app.options = [];
  renderApp();
}

const renderApp = () => {
  // JSX - Javascript XML - JS Syntax extension
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
      <button onClick={removeAllOptions}>Remove All</button>

      {/** 
      {
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
      }
      */}
      
      <ol>
      {/* Challenge: map over app.options getting back an array of "li"s. set key and text */}
      {
        app.options.map((option) => {
          return <li key={option}>Option: {option}</li>
        })
      }
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