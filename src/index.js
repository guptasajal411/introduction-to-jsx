import React from 'react';
import ReactDOM from 'react-dom';

var firstName = "Sajal";
var lastName = "Gupta";
var picsum = "http://picsum.photos/"
var date = new Date();

// const customStyle = {
//     color: "white",
//     fontSize: "1 rem",
//     backgroundColor: "black",
//     border: "1px solid red"
// }

// customStyle.fontSize = "1.5rem"

var time = date.getHours();
var welcomeMessage;
var customStyle;
if (time >= 6 && time <= 12){
    welcomeMessage = "Good Morning";
    customStyle = {
        color: "red"
    }
} else if (time > 12 && time <= 18){
    welcomeMessage = "Good Afternoon"
    customStyle = {
        color: "green"
    }
} else if (time > 18 && time <= 24){
    welcomeMessage = "Good Evening"
    customStyle = {
        color: "orange"
    }
} else {
    welcomeMessage = "Good Night"
    customStyle = {
        color: "blue"
    }
}


ReactDOM.render(
    <div>
        <h4 style={customStyle} className="heading">{welcomeMessage}, The time is {time}</h4>
        <p>My name is {firstName + ' ' + lastName}</p>
        <div>
            <img className="tech-image" src={picsum + 200 + '?grayscale'} />
        </div>
    </div>,
    document.querySelector("#root")
);