import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const Day = (props) => {
  let icon = props.icon.replace(/-/g, '_').toUpperCase();
  // console.log(icon)
  return (
    <li>
      <h2>{props.currentDay}</h2>

      <h3>{props.summary}</h3>

      <ReactAnimatedWeather 
        color='deepskyblue' 
        icon={icon}
        size={150}
        animate={true} 
      />
      
      <div>Temperature Range: {props.tempLow} to {props.tempHigh}</div>   
    </li>
  );
}

export default Day;