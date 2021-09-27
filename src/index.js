import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        <h1>Hello World!</h1>
        <ul>
            <li>Unordered List with React</li>
            <li><code>ReactDOM.render</code> method can only take a single HTML element</li>
            <li>Babel compiles JS code so that every browser can understand it</li>
        </ul>
    </div>,
    document.querySelector("#root")
);