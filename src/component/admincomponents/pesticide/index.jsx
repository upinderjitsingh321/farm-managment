import React, { useState } from "react";
import PesticideCard from "../../Card/pesticide/pesticidecard";
import "./style.css"
import { Button } from "react-bootstrap";

function PesticideDashboard() {
  // Define pesticide data
  const pesticides = [
    { name: "Glyphosate", type: "Herbicide", usage: "Use 5ml per liter of water", toxicity: "High" },
    { name: "Neem Oil", type: "Organic Pesticide", usage: "Mix 10ml with 1L water", toxicity: "Low" },
    { name: "Chlorpyrifos", type: "Insecticide", usage: "Spray directly on affected plants", toxicity: "Medium" },
    { name: "Glyphosate", type: "Herbicide", usage: "Use 5ml per liter of water", toxicity: "High" },
    { name: "Neem Oil", type: "Organic Pesticide", usage: "Mix 10ml with 1L water", toxicity: "Low" },
    { name: "upinder", type: "Insecticide", usage: "Spray directly on affected plants", toxicity: "Medium" }
  ];
  const [viewmore, setViewMore] = useState(false)

  return (

    <div style={{ margin: "20px 75px", display: "flex", flexDirection: "column", gap: "15px" }}>
      <span className="text-center fs-2">View List OF Chemicals</span>
      <div className="heading-list"></div>
      {(
        viewmore ? pesticides : pesticides.slice(0, 3)).map((pesticide, index) => (
          <PesticideCard key={index} {...pesticide} />
        )
        )}

      {
        !viewmore ? (
          <Button className="btn-success"
            onClick={() => setViewMore(true)}
          >
            ShowMore
          </Button>
        ) : (
          <Button className="btn-success"
            onClick={() => setViewMore(false)}
          >
            ShowLess
          </Button>
        )
      }


    </div>
  );
}

export default PesticideDashboard;
