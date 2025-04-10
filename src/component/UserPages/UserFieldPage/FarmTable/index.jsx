import React, { useEffect, useState } from "react";
import "./style.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ModelFarmForm from "../../../Models/Forms/FarmForm";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function UserFarmTable({
  heading,
  data,
  currentPage,
  rowsPerPage,
  totalCount,
  onPageChange,
  onRowClick,
}) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  if (!close) return null;

  return (
    <div className="userdashboardtable shadow my-3 ">
      <div className="dash-title d-flex justify-content-between">
        <h5 className="pt-1 ps-2">
          {heading}
          <KeyboardDoubleArrowDownIcon />
        </h5>
        <ModelFarmForm />
        <div>
          {minimize ? (
            <MinimizeIcon
              className="pb-1"
              onClick={() => setMinimize(false)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <AddIcon
              className="pt-2"
              onClick={() => setMinimize(true)}
              style={{ cursor: "pointer" }}
            />
          )}
          <CloseIcon
            className="pt-2 text-danger"
            onClick={() => setClose(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      {minimize && (
        <table className="w-100 border-collapse border border-gray-300 mb-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Farm Id</th>
              <th className="border border-gray-300 p-2"> Farm Name</th>
              <th className="border border-gray-300 p-2"> Type</th>
              <th className="border border-gray-300 p-2"> Created</th>
              <th className="border border-gray-300 p-2"> Owner</th>
              <th className="border border-gray-300 p-2"> Fields</th>
              <th className="border border-gray-300 p-2"> Acre</th>
              <th className="border border-gray-300 p-2"> Status</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                onClick={() => onRowClick(item.farm_id)}
                style={{ cursor: "pointer" }}
                className="border border-gray-300"
              >
                <td className="border border-gray-300 p-2">{item.farm_id}</td>
                <td className="border border-gray-300 p-2">{item.farm_name}</td>
                <td className="border border-gray-300 p-2">{item.type}</td>
                <td className="border border-gray-300 p-2">{item.Created}</td>
                <td className="border border-gray-300 p-2">{item.owner}</td>
                <td className="border border-gray-300 p-2">{item.Fields}</td>
                <td className="border border-gray-300 p-2">{item.Acre}</td>
                <td className="border border-gray-300 p-2">{item.Active}</td>
                <td className="border border-gray-300 p-2">
                  <Button variant="contained" color="success">
                    <EditIcon />
                    <ArrowDropDownIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total
          Farms: {totalCount}
        </div>
        <div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={currentPage === Math.ceil(totalCount / rowsPerPage)}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserFarmTable;
