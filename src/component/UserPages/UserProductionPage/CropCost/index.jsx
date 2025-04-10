import { useState } from "react";


function UserExpenseTable() {
const initialData = [
  {
    crops:"cron",
    fertilizer:"2025",
    herbic:"4",
    pesticide:"24",
    fungicide:"5",
    manure:"200000",
    labourcost:"1500000",
    activities:"110000",
    othercost:"800000",
},
{
  crops:"cron",
  fertilizer:"2025",
  herbic:"4",
  pesticide:"24",
  fungicide:"5",
  manure:"200000",
  labourcost:"1500000",
  activities:"110000",
  othercost:"800000",
}
];

  const [data, setData] = useState(initialData);

  

  return (
    <div className="p-4">
            <h4 className="pb-3">Output</h4>

      <table className="w-100 border-collapse border border-gray-300">
        <thead className="head-border">
          <tr>
            <th className="border border-gray-300 p-2"> Crop</th>
            <th className="border border-gray-300 p-2"> Acre</th>
            <th className="border border-gray-300 p-2"> Production(Qtl.)</th>
            <th className="border border-gray-300 p-2">Price(Qtl.)</th>
            <th className="border border-gray-300 p-2">Total Income</th>
            <th className="border border-gray-300 p-2"> Income/acre</th>
            <th className="border border-gray-300 p-2">Net Income</th>
          
            
          </tr>
        </thead>
        <tbody>
          {data.map((records) => (
            <tr key={records.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{records.crops}</td>
              <td className="border border-gray-300 p-2">{records.fertilizer}</td>
              <td className="border border-gray-300 p-2">{records.herbic}</td>
              <td className="border border-gray-300 p-2">{records.pesticide}</td>
              <td className="border border-gray-300 p-2">{records.fungicide}</td>
            
            
              
            </tr>
            
           
          ))}
        </tbody>
    
      </table>
    </div>
  );
}
export default  UserExpenseTable

