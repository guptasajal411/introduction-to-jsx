import React from 'react';
import ReactDOM from 'react-dom';

var firstName = "Sajal";
var lastName = "Gupta";
var username = "guptasajal411";

ReactDOM.render(
    <div>
        <h1>Hello {firstName + " " + lastName}!</h1>
        <p>Your username is {username}</p>
        <ul>
            <li>Unordered List with React</li>
            <li><code>ReactDOM.render</code> method can only take a single HTML element</li>
            <li>Babel compiles JS code so that every browser can understand it</li>
        </ul>
    </div>,
    document.querySelector("#root")
);