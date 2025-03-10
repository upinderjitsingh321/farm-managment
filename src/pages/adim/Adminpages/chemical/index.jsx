import { Button } from "@mui/material";
import React from "react";

function ChemicalRecordsTable() {
 const chemicals =[ {
  farm:"#01",
  field:2,
  name:"upinder",
  product: "corazen",
  activengredient:"dont know",
  dosage:"1000ml",
  applydate:"2-2-2025",
  manufacturer:"Fmc",
  price:"2000"
 },
 {
 farm:"#01",
 field:2,
 name:"upinder",
 product: "corazen",
 activengredient:"dont know",
 dosage:"1000ml",
 applydate:"2-2-2025",
 manufacturer:"Fmc",
 price:"2000",
}
]

  return (
    <div className="p-4">
      <h2 className="text-center fs-2">Chemical Analysis Records</h2>
      <div className="heading-list"></div>

      <table className="w-100 mt-4 border-collapse border border-gray-300">  
      <thead>
            <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Farm</th>
            <th className="border border-gray-300 p-2">Field</th>
            <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Product</th>
              <th className="border border-gray-300 p-2">Active Ingredient</th>
              <th className="border border-gray-300 p-2"> Dosage/Acre</th>
              <th className="border border-gray-300 p-2"> Application Date</th>
              <th className="border border-gray-300 p-2"> Manufacturer</th>
              <th className="border border-gray-300 p-2"> Price</th>
            </tr>
          </thead>
          <tbody>
          {chemicals.map((list,index) =>
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{list.farm}</td>
                <td className="border border-gray-300 p-2">{list.field}</td>
                <td className="border border-gray-300 p-2">{list.name}</td>
                <td className="border border-gray-300 p-2">{list.product}</td>
                <td className="border border-gray-300 p-2">{list.activengredient}</td>
                <td className="border border-gray-300 p-2">{list.dosage}</td>
                <td className="border border-gray-300 p-2">{list.manufacture}</td>
                <td className="border border-gray-300 p-2">{list.applydate}</td>
                <td className="border border-gray-300 p-2">{list.price}</td>
                <td className="border border-gray-300 p-2">
                <Button variant="contained" color="error" >
                  Delete
                </Button>
              </td>
               
              </tr>
        )}
          </tbody>
      </table>
    </div>
  );
}
export default  ChemicalRecordsTable
