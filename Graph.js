import React from 'react'
import ReactECharts from 'echarts-for-react';

const Graph = ({array, Alcoholdetail}) => {
    const newarray= Alcoholdetail;
    option = {
        xAxis: {
          data: newarray
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: array
          }
        ]
      };
  return (

    <div>
      <ReactECharts option={option}/>
    </div>
  )
}

export default Graph
