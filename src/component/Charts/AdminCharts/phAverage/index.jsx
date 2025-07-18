import React from 'react';
import ReactECharts from 'echarts-for-react';

const PHAverage = ({data}) => {

    var option;
    option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            return params[0].name + '<br/>' +
                   params[0].seriesName + ': ' + params[0].value + '%';
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Ph Level'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}%' // ✅ This is the correct place
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '10%',
            data: [data]
          }
        ]
      };
      

  return <ReactECharts option={option} />;
};

export default PHAverage;
