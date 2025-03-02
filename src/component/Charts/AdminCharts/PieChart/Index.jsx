import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const AdminPieChart = ({ data }) => {
    const COLORS = ["#bdb76b", "#808080", "#836953", "#fa8072", "#2e8b57", "#4682b4", "#9370db"];

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    dataKey="value" // ✅ Moved inside <Pie>
                    startAngle={360}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label={({percent }) => `${(percent * 100).toFixed(1)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default AdminPieChart;
