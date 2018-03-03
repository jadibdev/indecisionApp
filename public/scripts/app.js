"use strict";

console.log("app is running");

var element = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "render this to the window"
    )
);

ReactDOM.render(element, appRoot);

var appRoot = document.getElementById('app');
