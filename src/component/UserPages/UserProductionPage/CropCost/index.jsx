import { useState } from "react";


function UserExpenseTable() {
const initialData = [
  {
    crops:"cron",
    variety:"29-02-2025",
    snowing:"2025",
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
    snowing:"2025",
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
            <th className="border border-gray-300 p-2">Seeds </th>
            <th className="border border-gray-300 p-2">Fertilizer</th>
            <th className="border border-gray-300 p-2">Herbic</th>
            <th className="border border-gray-300 p-2"> Pesticide</th>
            <th className="border border-gray-300 p-2">Fungicide</th>
            <th className="border border-gray-300 p-2">Manure</th>
            <th className="border border-gray-300 p-2">Labour Cost</th>
            <th className="border border-gray-300 p-2">Activities</th>
            <th className="border border-gray-300 p-2">Other Cost</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{record.crops}</td>
              <td className="border border-gray-300 p-2">{record.variety}</td>
              <td className="border border-gray-300 p-2">{record.snowing}</td>
              <td className="border border-gray-300 p-2">{record.harvest}</td>
              <td className="border border-gray-300 p-2">{record.spending}</td>
              <td className="border border-gray-300 p-2">{record.spendingperacre}</td>
              <td className="border border-gray-300 p-2">{record.production}</td>
              <td className="border border-gray-300 p-2">{record.income}</td>
              <td className="border border-gray-300 p-2">{record.incomeperacre}</td>
              <td className="border border-gray-300 p-2">{record.profit}</td>
            
              
            </tr>
            
           
          ))}
        </tbody>
    
      </table>
    </div>
  );
}
export default  UserExpenseTable

