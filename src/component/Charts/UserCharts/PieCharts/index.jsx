import React, { useState } from "react";
import { PieChart, Pie,Cell, Sector, ResponsiveContainer } from "recharts";
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import "./style.css";

const renderActiveShape = (props) => {
  if (!props) return null;
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  if (!payload) return null;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};




const CustomPieChart = ({
  data = [],
  width = 420,
  height = 400,
  innerRadius = 60,
  outerRadius = 80,
  tittle = "default",
  heading = "",
  link=""
}) => {

  const COLORS = ["#bdb76b", "#808080 ", "#836953 ", "#fa8072 ", "#2e8b57", "#4682b4", "#9370db"];

  const getlink = (tittle) => {
    switch (tittle) {
      case "crop":
        return "Crop 2025-2026";
      case "chemical":
        return "Go to Chemical List";
      case "profit":
        return "See Profit";
      

      default:
        return tittle || null; // Use default icon if provided
    }
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
const [close,setClose] =useState(true)
if(!close) return null

  return (
    <div className='userdashboardtable1 shadow' style={{ width: width, height: height }}>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{heading}</h5>
        <div>
          <CloseIcon className='pt-2 text-danger' onClick={() => setClose(false)} style={{cursor:"pointer"}} />
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        {data.length > 0 ? (
          <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        ) : (
          <p style={{ textAlign: "center", color: "#888" }}>No Data Available</p>
        )}
      </ResponsiveContainer>

      <div className='mt-5 text-end arrowdiv1'>
        <Link to={link} style={{ color: 'rgb(79 110 79)', marginRight: "10px" }}>
          {getlink(tittle)}
        
        <ArrowForwardIcon style={{ backgroundColor: "rgb(79 110 79)", color: "white", borderRadius: "50%", marginRight: "10px",marginLeft:"10px", fontSize: "20px" }} />
        </Link>
      </div>
    </div>
  );
};

export default CustomPieChart;
