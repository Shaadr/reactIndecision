'use strict';

/*This file is complied via babel command.
  from /indesicion-app run: 
  babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react --watch
*/

var app = {
  title: 'Indesicion App',
  subtitle: 'Making the hard decisions for you!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var removeAllOptions = function removeAllOptions() {
  app.options = [];
  renderApp();
};

var renderApp = function renderApp() {
  // JSX - Javascript XML - JS Syntax extension
  var template = React.createElement(
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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAllOptions },
      'Remove All'
    ),
    [React.createElement(
      'p',
      { key: '1' },
      'a'
    ), React.createElement(
      'p',
      { key: '2' },
      'b'
    ), React.createElement(
      'p',
      { key: '3' },
      'd'
    )],
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
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  var appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

renderApp();
