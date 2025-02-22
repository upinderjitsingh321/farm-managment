import React from "react";
import { GiChemicalDrop, GiPlantWatering } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";
import { Card } from "@mui/material";
import "./style.css"; 

const PesticideCard = ({ name, type, usage, toxicity }) => {
  
  // Function to get icon based on toxicity level
  const getToxicityInfo = () => {
    switch (toxicity) {
      case "Low":
        return { icon: <GiPlantWatering className="pesticide-icon" style={{ color: "green" }} />, level: "low" };
      case "Medium":
        return { icon: <GiChemicalDrop className="pesticide-icon" style={{ color: "orange" }} />, level: "medium" };
      case "High":
        return { icon: <FaSkullCrossbones className="pesticide-icon" style={{ color: "red" }} />, level: "high" };
      default:
        return { icon: <GiChemicalDrop className="pesticide-icon" style={{ color: "gray" }} />, level: "default" };
    }
  };

  const { icon, level } = getToxicityInfo();

  return (
    <Card className="pesticide-card">
      <div className="pesticide-card-header">
        <h5 className="pesticide-name">{name}</h5>
        <span>{icon}</span>
      </div>
      <p>{type}</p>
      <p><strong>Usage:</strong> {usage}</p>
      <p><strong>Toxicity:</strong> <span className={`toxicity ${level}`}>{toxicity}</span></p>
    </Card>
  );
};

export default PesticideCard;
