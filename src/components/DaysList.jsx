import React from 'react';
import Day from './Day';

const DaysList = ({ locationName, days }) => {
  const weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

  if ( days.length === 0 ) {
    return <div>Search a location!</div>
  }

  const makeDay = days.slice(0,7).map(day => {
    // day
    let currentTime = day.time * 1000;
    let currentDate = new Date(currentTime);
    let currentDay = weekday[currentDate.getDay()];

    // icon, summary, temperatureHigh, temperatureLow
    return (
      <Day
        key={day.time}
        currentDay={currentDay}
        icon={day.icon}
        summary={day.summary}
        tempHigh={day.temperatureHigh}
        tempLow={day.temperatureLow}
      />
    );
  })

  return (
    <div>
      <h2>Searched: {locationName}</h2>
      <ul>
        {makeDay}
      </ul>
    </div>
  )
}

export default DaysList;