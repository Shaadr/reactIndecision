"use strict";

var showing = false;

var onShowDetails = function onShowDetails() {
    showing = !showing;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onShowDetails },
            showing ? "Hide Details" : "Show Details"
        ),
        showing ? React.createElement(
            "p",
            null,
            "More Details Shown!"
        ) : null
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();
