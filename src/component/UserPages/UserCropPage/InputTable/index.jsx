import React, { useState } from "react";
import "./style.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import ModelInputForm from "../../../Models/Forms/AddInputs";

function InputTable({
  heading,
  dataa,
  currentPage,
  rowsPerPage,
  totalCount,
  onPageChange,
  selectedCropId,
  croplist,
}) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);

  if (!close) return null;

  return (
    <div className="userdashboardtable shadow my-3">
      <div className="dash-title d-flex justify-content-between">
        <h5 className="pt-1 ps-2">
          {heading} <KeyboardDoubleArrowDownIcon />
        </h5>
        <ModelInputForm cropId={selectedCropId} croplist={croplist} />
        <div className="d-flex align-items-center gap-2 me-2">
          {minimize ? (
            <div
              onClick={() => setMinimize(false)}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-minus"></i>
            </div>
          ) : (
            <div
              onClick={() => setMinimize(true)}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-plus"></i>
            </div>
          )}
          <div
            className="text-danger"
            onClick={() => setClose(false)}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

      {minimize && (
        <div className="table table-responsive">
          <table className="w-100 border-collapse border border-gray-300 mb-5">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Inputs</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Rate</th>
                <th className="border border-gray-300 p-2">Period</th>
                <th className="border border-gray-300 p-2">Dosage/Acre</th>
                <th className="border border-gray-300 p-2">Date</th>
                
                <th className="border border-gray-300 p-2">Note</th>
                <th className="border border-gray-300 p-2"></th>
              </tr>
            </thead>
            <tbody>
              {selectedCropId !== null &&
                dataa.map((item, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="border border-gray-300 p-2">
                      {item.inputname}
                    </td>
                    <td className="border border-gray-300 p-2">{item.name}</td>
                    <td className="border border-gray-300 p-2">{item.rate}</td>
                    <td className="border border-gray-300 p-2">
                      {item.period}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {item.dosage}
                    </td>
                    <td className="border border-gray-300 p-2">{item.date}</td>
                    <td className="border border-gray-300 p-2">
                      {item.manufacture_com}
                    </td>
                    <td className="border border-gray-300 p-2">{item.note}</td>
                    <td>
                      <button className="button_dez">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        {/* <ArrowDropDownIcon /> */}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total
          Inputs: {totalCount}
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

export default InputTable;
