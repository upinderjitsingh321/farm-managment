import { useState } from "react";
import "./style.css"

function UserProductionTable() {
const initialData = [
  {
    crops:"cron",
    variety:"29-02-2025",
    sowing:"2025",
    harvest:"4",
    spending:"24",
    spendingperacre:"5",
    production:"200000",
    income:"1500000",
    incomeperacre:"110000",
    profit:"800000",
    profitperacre:"800000",
},
  {
    crops:"beet",
    variety:"29-02-2025",
    sowing:"2025",
    harvest:"4",
    spending:"24",
    spendingperacre:"5",
    production:"200000",
    income:"1500000",
    incomeperacre:"110000",
    profit:"800000",
    profitperacre:"800000",
  }
];

  const [data, setData] = useState(initialData);

  

  return (
    <div className="p-4">
      <table className="w-100 border-collapse border border-gray-300">
        <thead className="head-border">
          <tr>
            <th className="border border-gray-300 p-2"> Crops</th>
            <th className="border border-gray-300 p-2">Variety </th>
            <th className="border border-gray-300 p-2">Sowing(ac)</th>
            <th className="border border-gray-300 p-2">Harvested(ac)</th>
            <th className="border border-gray-300 p-2"> Spending</th>
            <th className="border border-gray-300 p-2">Spending/ac</th>
            <th className="border border-gray-300 p-2">Production</th>
            <th className="border border-gray-300 p-2">Income</th>
            <th className="border border-gray-300 p-2">Income/ac</th>
            <th className="border border-gray-300 p-2">Profit</th>
            <th className="border border-gray-300 p-2">Profit/ac</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{record.crops}</td>
              <td className="border border-gray-300 p-2">{record.variety}</td>
              <td className="border border-gray-300 p-2">{record.sowing}</td>
              <td className="border border-gray-300 p-2">{record.harvest}</td>
              <td className="border border-gray-300 p-2">{record.spending}</td>
              <td className="border border-gray-300 p-2">{record.spendingperacre}</td>
              <td className="border border-gray-300 p-2">{record.production}</td>
              <td className="border border-gray-300 p-2">{record.income}</td>
              <td className="border border-gray-300 p-2">{record.incomeperacre}</td>
              <td className="border border-gray-300 p-2">{record.profit}</td>
              <td className="border border-gray-300 p-2">{record.profitperacre}</td>
            
              
            </tr>
            
           
          ))}
        </tbody>
    
      </table>
    </div>
  );
}
export default  UserProductionTable

