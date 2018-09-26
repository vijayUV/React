'use strict';

console.log('App.js is running');

// JSX - Javascript XML
var app = { title: 'Indecision App', subtitle: 'Put your hands in the hands of a computer', options: ['One', 'Two'] };

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
        app.options.length > 0 ? 'Here are your options :' : 'No options:'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    )
);
console.log(templateTwo);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

//Challenge
//Make a button text -1
//Setup minuone fundtion- log "minusone"
//reset button - setup reset function - log reset

var minusOne = function minusOne() {
    console.log('minusOne');
};
var reset = function reset() {
    console.log('reset');
};
var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);

//ReactDOM.render(templateThree,appRoot);
