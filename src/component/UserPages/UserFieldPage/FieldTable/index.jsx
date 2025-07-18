import React, { useState } from "react";
import "./style.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import ModelFieldForm from "../../../Models/Forms/FieldForm";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function UserFieldTable({
  heading,
  data,
  selectedFarmId,
  currentPage,
  rowsPerPage,
  totalCount,
  onPageChange,
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
        <ModelFieldForm />
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
              <th className="border border-gray-300 p-2">Field </th>
              <th className="border border-gray-300 p-2"> Farm</th>
              <th className="border border-gray-300 p-2"> Acre</th>
              <th className="border border-gray-300 p-2"> OwnerShip</th>
              <th className="border border-gray-300 p-2"> Khasra No.</th>
              <th className="border border-gray-300 p-2">Farm Practices </th>
              {/* <th className="border border-gray-300 p-2"> Status </th> */}
            </tr>
          </thead>
          <tbody>
  {selectedFarmId !== null ? (
    data.length > 0 ? (
      data.map((item, index) => (
        <tr key={index} className="border border-gray-300">
          <td className="border border-gray-300 p-2">{item.field_no}</td>
          <td className="border border-gray-300 p-2">{item.farm_no}</td>
          <td className="border border-gray-300 p-2">{item.acre}</td>
          <td className="border border-gray-300 p-2">{item.landownership}</td>
          <td className="border border-gray-300 p-2">{item.khasra}</td>
          <td className="border border-gray-300 p-2">{item.farmpractices}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" className="text-center p-2">
          No field found.
        </td>
      </tr>
    )
  ) : null}
</tbody>


</table>
      )}
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total
          Fields: {totalCount}
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

export default UserFieldTable;
