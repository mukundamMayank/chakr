import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const Graph = ({ chartType, selectedYear, selectedMonth, startDate, endDate }) => {
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    let params = { chart_type: chartType };
    console.log(params)

    if (chartType === 'yearly') {
      params.year = selectedYear;
    } else if (chartType === 'monthly') {
      params.year = selectedYear;
      params.month = selectedMonth;
    } else if (chartType === 'period') {
      params.start_date = startDate;
      params.end_date = endDate;
    }

    axios.get('http://localhost:6000/plot', { params })
      .then(response => {
        const plotHtml = response.data.plot_html;

        console.log('Plot HTML:', plotHtml);

        setGraphData(plotHtml);
      })
      .catch(error => {
        console.error('Error fetching plot data:', error);
      });
  }, [chartType, selectedYear, selectedMonth, startDate, endDate]);  

  return (
    <div>
      <Plot
        data={[]}
        layout={{ autosize: true }}
        useResizeHandler={true}
        config={{ displayModeBar: false }}
        dangerouslySetInnerHTML={{ __html: graphData }}
      />
    </div>
  );
};

export default Graph;

