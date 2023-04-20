import React from 'react'
import ReactECharts from 'echarts-for-react';
const Linegraph = ({dataone,datatwo}) => {
    console.log('naya', dataone);
    console.log('naya2', datatwo);
     const ashdetails=dataone;
     const flavodetails=datatwo;
     console.log('dfsddvd',ashdetails);
    option = {
        xAxis: {
          type: 'category',
          data: flavodetails
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: ashdetails,
            type: 'line'
          }
        ]
      };
  return (
    <div>
        <ReactECharts option={option}/>
    </div>
  )
}

export default Linegraph
