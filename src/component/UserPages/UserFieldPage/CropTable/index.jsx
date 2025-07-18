import React, { useEffect, useState } from "react";
import "./style.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ModelCropForm from "../../../Models/Forms/CropForm";
import AddIcon from "@mui/icons-material/Add";
import { USER } from "../../../../config/endpoints";
import axios from "axios";

function UserCropTable({ heading }) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [croplist, setCroplist] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [rows, setRows] = useState(5);


  const access_token = localStorage.getItem("access_token"); // Replace with your token handling logic

  const handledata = async () => {
    try {
      const result = await axios.get(
        `${USER.CROP_LIST}?page_no=${pageNo}&rows=${rows}`,
        {
          headers: { access_token },
        }
      );
      const response = result?.data?.data;
      setCroplist(response?.list || []);
      setTotalCount(response?.totalCounts || 0);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    
      handledata();
    
  }, [pageNo, rows]);

  if (!close) return null;

  const totalPages = Math.ceil(totalCount / rows);

  return (
    <div className="userdashboardtable shadow my-3">
      <div className="dash-title d-flex justify-content-between">
        <h5 className="pt-1 ps-2">
          {heading}
          <KeyboardDoubleArrowDownIcon />
        </h5>
        <ModelCropForm />
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
        <table className="w-100 border-collapse border border-gray-300 mb-5 crop-length">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Field</th>
              <th className="border border-gray-300 p-2">Year</th>
              <th className="border border-gray-300 p-2">Crop</th>
              <th className="border border-gray-300 p-2">Acre</th>
              <th className="border border-gray-300 p-2">Variety</th>
              <th className="border border-gray-300 p-2">Production (Qtl)</th>
            </tr>
          </thead>
          <tbody>
            {croplist.length > 0 ? (
              croplist.map((crop, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2">{crop.field}</td>
                  <td className="border border-gray-300 p-2">{crop.season_year}</td>
                  <td className="border border-gray-300 p-2">{crop.crop}</td>
                  <td className="border border-gray-300 p-2">{crop.acre}</td>
                  <td className="border border-gray-300 p-2">{crop.variety}</td>
                  <td className="border border-gray-300 p-2">{crop.production}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-2">
                  No crops found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {pageNo} of {totalPages} — Total Crops: {totalCount}
        </div>
        <div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            disabled={pageNo === 1}
            onClick={() => setPageNo((prev) => prev - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={pageNo === totalPages}
            onClick={() => setPageNo((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCropTable;
