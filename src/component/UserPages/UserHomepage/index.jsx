import { useState } from "react";
import Button from "@mui/material/Button";
import "./style.css"

function UserHome() {
const initialData = [
  {
    farmaccount:"upinderjitsingh@gmail.com",
    created:"29-02-2025",
    year:"2025",
    farm:"4",
    area:"24",
    fields:"5",
    expenditure:"200000",
    profit:"800000"  
},
  {
    farmaccount:"upinderjitsingh@gmail.com",
    created:"29-02-2025",
    year:"2025",
    farm:"4",
    area:"24",
    fields:"5",
    expenditure:"200000",
    profit:"800000"
  }
];

  const [data, setData] = useState(initialData);

  

  return (
    <div className="p-4">
      <table className="w-100 border-collapse border border-gray-300">
        <thead className="head-border">
          <tr>
            <th className="border border-gray-300 p-2">Farm Account</th>
            <th className="border border-gray-300 p-2">Created </th>
            <th className="border border-gray-300 p-2">Year</th>
            <th className="border border-gray-300 p-2">Farm(s)</th>
            <th className="border border-gray-300 p-2"> Area</th>
            <th className="border border-gray-300 p-2">Fields</th>
            <th className="border border-gray-300 p-2">Expenditure</th>
            <th className="border border-gray-300 p-2">Profit</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{record.farmaccount}</td>
              <td className="border border-gray-300 p-2">{record.created}</td>
              <td className="border border-gray-300 p-2">{record.year}</td>
              <td className="border border-gray-300 p-2">{record.farm}</td>
              <td className="border border-gray-300 p-2">{record.area}</td>
              <td className="border border-gray-300 p-2">{record.fields}</td>
              <td className="border border-gray-300 p-2">{record.expenditure}</td>
              <td className="border border-gray-300 p-2">{record.profit}</td>
            
              <td className="border border-gray-300 p-2 text-center">
                <Button className="openfarm"  >
                  Open This Farm
                </Button>
              </td>
              
            </tr>
            
           
          ))}
        </tbody>
    
      </table>
    </div>
  );
}
export default  UserHome

