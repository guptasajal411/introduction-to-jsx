import React from 'react';
import ReactDOM from 'react-dom';

var firstName = "Sajal";
var lastName = "Gupta";
var picsum = "http://picsum.photos/"

ReactDOM.render(
    <div>
        <h1 className="heading" contentEditable="true" spellCheck="false">My Tech Stack</h1>
        <div>
            <img className="tech-image" src={picsum + 200 + '?grayscale'} />
        </div>
    </div>,
    document.querySelector("#root")
);