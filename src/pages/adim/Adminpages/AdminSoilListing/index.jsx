import { useState } from "react";
import Button from "@mui/material/Button";

function SoilRecordsTable() {
const initialData = [
  {
    id: 1,
    farmerName: "John Doe",
    contact: "123-456-7890",
    location: "35.123, -80.987",
    soilType: "Loamy",
    condition: "Good",
    pH: "6.5",
    issues: "Pests",
    moisture: "25%",
    unit: "%",
    texture: "Sandy",
    ec: "1.2",
    organicLevel: "Medium",
    salinity: "2.5",
    nutrients: { N: 10, P: 5, K: 12, SO4: 3, Cl: 2, Cu: 0.5, B: 1.0, Ca: 5, Mg: 4, Fe: 2.5, Zn: 0.8, Mn: 0.3 }
  },
  {
    id: 1,
    farmerName: "John Doe",
    contact: "123-456-7890",
    location: "35.123, -80.987",
    soilType: "Loamy",
    condition: "Good",
    pH: "6.5",
    issues: "Pests",
    moisture: "25%",
    unit: "%",
    texture: "Sandy",
    ec: "1.2",
    organicLevel: "Medium",
    salinity: "2.5",
    nutrients: { N: 10, P: 5, K: 12, SO4: 3, Cl: 2, Cu: 0.5, B: 1.0, Ca: 5, Mg: 4, Fe: 2.5, Zn: 0.8, Mn: 0.3 }
  }
];

  const [data, setData] = useState(initialData);

  

  return (
    <div className="p-4">
      <h2 className="text-center fs-2">Soil Analysis Records</h2>
      <div className="heading-list"></div>
      <table className="w-100 mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Farmer Name</th>
            <th className="border border-gray-300 p-2">Contact</th>
            <th className="border border-gray-300 p-2">Location</th>
            <th className="border border-gray-300 p-2">Soil Type</th>
            <th className="border border-gray-300 p-2">Condition</th>
            <th className="border border-gray-300 p-2">pH Level</th>
            <th className="border border-gray-300 p-2">Moisture</th>
            <th className="border border-gray-300 p-2">EC (dS/m)</th>
            <th className="border border-gray-300 p-2">Salinity</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{record.id}</td>
              <td className="border border-gray-300 p-2">{record.farmerName}</td>
              <td className="border border-gray-300 p-2">{record.contact}</td>
              <td className="border border-gray-300 p-2">{record.location}</td>
              <td className="border border-gray-300 p-2">{record.soilType}</td>
              <td className="border border-gray-300 p-2">{record.condition}</td>
              <td className="border border-gray-300 p-2">{record.pH}</td>
              <td className="border border-gray-300 p-2">{record.moisture}</td>
              <td className="border border-gray-300 p-2">{record.ec}</td>
              <td className="border border-gray-300 p-2">{record.salinity}</td>
              <td className="border border-gray-300 p-2">
                <Button variant="contained" color="error" >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default  SoilRecordsTable
