import React from "react";
import PesticideCard from "../../Card/pesticide/pesticidecard";

function PesticideDashboard() {
  // Define pesticide data
  const pesticides = [
    { name: "Glyphosate", type: "Herbicide", usage: "Use 5ml per liter of water", toxicity: "High" },
    { name: "Neem Oil", type: "Organic Pesticide", usage: "Mix 10ml with 1L water", toxicity: "Low" },
    { name: "Chlorpyrifos", type: "Insecticide", usage: "Spray directly on affected plants", toxicity: "Medium" }
  ];

  return (
    <div style={{ margin: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
      {pesticides.map((pesticide, index) => (
        <PesticideCard key={index} {...pesticide} />
      ))}
    </div>
  );
}

export default PesticideDashboard;
