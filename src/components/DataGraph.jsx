import React from 'react';
import Plot from 'react-plotly.js';

const DataGraph = ({ graphTemps }) => {

  if ( !graphTemps ) {
    return <div></div>
  }
  
  let y1 = [graphTemps.five.low, graphTemps.two.low, graphTemps.one.low, graphTemps.current.low];
  let y2 = [graphTemps.five.high, graphTemps.two.high, graphTemps.one.high, graphTemps.current.high];
  var trace1 = {
    x: ['5 years', '2 years', '1 year', 'Today'],
    y: y1,
    name: 'Low',
    type: 'bar',
    hoverinfo: 'none',
    textposition: 'auto',
    text: y1,
  };

  var trace2 = {
    x: ['5 years', '2 years', '1 year', 'Today'],
    y: y2,
    name: 'High',
    type: 'bar',
    textposition: 'auto',
    hoverinfo: 'none',
    text: y2,
  };

  return (
    <Plot
      data={[trace1, trace2]}
      layout={{title: 'Temperature on this day over the past 5 years', barmode: 'group'}}
    />
  );

}

export default DataGraph;