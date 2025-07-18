import React, { useEffect, useState } from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import ModelUpperSoilForm from "../../../Models/Forms/Soilform";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { USER } from "../../../../config/endpoints";

function SoilTable({
  heading,
  dataa,
  currentPage,
  rowsPerPage,
  totalCount,
  selectedFieldId,
  onPageChange,
  onFieldChange,
}) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [fieldList, setFieldList] = useState([]);

  const access_token = localStorage.getItem("access_token");

  const fetchFields = async () => {
    try {
      const res = await axios.get(`${USER.DROPDOWN_FIELD_LIST}`, {
        headers: { access_token },
      });

      if (res.status === 200 && res.data?.data?.list?.length > 0) {
        setFieldList(res.data.data.list);
        
      }
    } catch (err) {
      console.error("Failed to fetch field list:", err);
    }
  };
  console.log(fieldList, "fieldListvvv");

  useEffect(() => {
    fetchFields();
  }, []);

  if (!close) return null;

  return (
    <div
      className="userdashboardtable shadow my-3"
      style={{ paddingBottom: minimize ? "209px" : "0" }}
    >
      <div className="dash-title d-flex">
        <h5 className="pt-1 ps-2">
          {heading} <KeyboardDoubleArrowDownIcon />
        </h5>
        <select
          onChange={(e) => onFieldChange(e.target.value)}
          className="drop_color2"
          value={selectedFieldId || ""}
        >
          <option value="">Select Field</option>
          {fieldList.map((field) => (
            <option key={field.id} value={field.id}>
              {`${field.users_farm?.farm_id}>${field.field_no}`}
            </option>
          ))}
        </select>
        <ModelUpperSoilForm />
        <div style={{ marginLeft: "670px" }}>
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
        <table className="w-100 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Field</th>
              <th className="border border-gray-300 p-2">Soil Type</th>
              <th className="border border-gray-300 p-2">Issues Faced</th>
              <th className="border border-gray-300 p-2">Organic Matter</th>
              <th className="border border-gray-300 p-2">
                Electrical Conductivity (dS/m)
              </th>
              <th className="border border-gray-300 p-2">Soil Salinity</th>
              <th className="border border-gray-300 p-2">Soil Texture</th>
              <th className="border border-gray-300 p-2">pH Level</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataa && dataa.length > 0 ? (
              dataa.map((item, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2">
                    {item.field_no || "-"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.soiltype || "-"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.issue || "-"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.o_matter || "-"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.e_conductivity || "-"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.s_salinity || "-"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.s_texture || "-"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.s_ph || "-"}
                  </td>
                  <td>
                      <button className="button_dez">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                        {/* <ArrowDropDownIcon /> */}
                      </button>
                    </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center p-3">
                  No soil data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total
          : {totalCount}
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

export default SoilTable;
