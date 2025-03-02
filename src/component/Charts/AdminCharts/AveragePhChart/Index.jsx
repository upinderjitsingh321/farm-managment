import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";



const PhPieChart = ({data,data1}) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
      
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="30%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={({percent }) => `${(percent * 100).toFixed(1)}%`}
        />
       
        <Pie
          dataKey="value"
          data={data}
          cx="70%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
          label={({percent }) => `${(percent * 100).toFixed(1)}%`}
        />
        <Tooltip />
       
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PhPieChart;
