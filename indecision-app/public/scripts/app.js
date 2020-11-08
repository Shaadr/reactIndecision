'use strict';

var showing = false;

var onShowDetails = function onShowDetails() {
    showing = !showing;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        !showing ? React.createElement(
            'button',
            { onClick: onShowDetails },
            'Show Details'
        ) : React.createElement(
            'button',
            { onClick: onShowDetails },
            'Hide Details'
        ),
        showing ? React.createElement(
            'p',
            null,
            'More Details Shown!'
        ) : null
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();
