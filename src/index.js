import React from 'react';
import ReactDOM from 'react-dom';

var firstName = "Sajal";
var lastName = "Gupta";
var picsum = "http://picsum.photos/"

const customStyle = {
    color: "white",
    fontSize: "1 rem",
    backgroundColor: "black",
    border: "1px solid red"
}

customStyle.fontSize = "1.5rem"

ReactDOM.render(
    <div>
        <h1 className="heading" contentEditable="true" spellCheck="false">My Tech Stack</h1>
        <p style={customStyle}>My name is {firstName + ' ' + lastName}</p>
        <div>
            <img className="tech-image" src={picsum + 200 + '?grayscale'} />
        </div>
    </div>,
    document.querySelector("#root")
);