import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

import Li from '../styles/Li';


const Day = (props) => {
  let icon = props.icon.replace(/-/g, '_').toUpperCase();
  return (
    <Li>
      <h2>{props.currentDay}</h2>

      <h3>{props.summary}</h3>

      <ReactAnimatedWeather 
        color='deepskyblue' 
        icon={icon}
        size={150}
        animate={true} 
      />
      
      <p>Temperature Range:</p>  
      <p>{props.tempLow} to {props.tempHigh}</p>
    </Li>
  );
}

export default Day;