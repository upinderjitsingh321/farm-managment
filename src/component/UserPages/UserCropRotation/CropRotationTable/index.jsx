import React, { useEffect, useState } from "react";
import "./style.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import axios from "axios";
import { USER } from "../../../../config/endpoints";
import { toast } from "react-toastify";

function CropRotationTable({ heading }) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [cropdata, setCropdata] = useState([]);
  const [totalcount, setTotalCount] = useState([]);

  const access_token = localStorage.getItem("access_token"); // Replace with your token handling logic

  const onYearChange = async () => {
    try {
      const res = await axios.get(
        `${USER.USER_CROP_HISTORY}?year=${selectedYear}&page_no=${currentPage}&rows=${rowsPerPage}`,
        {
          headers: { access_token },
        }
      );

      const response = res?.data?.data;
      console.log(response, "response");
      setCropdata(response?.list || []);
      setTotalCount(response?.totalCounts || 0);
      toast.success("Successfully");
    } catch (error) {
      console.error("Crop History fetch failed:", error);
    }
  };
  console.log(cropdata, "cropdatadd");

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };



  const years = Array.from(
    { length: 31 },
    (_, i) => new Date().getFullYear() - i
  );

 

  useEffect(() => {
    if (selectedYear) {
      onYearChange();
    }
  }, [selectedYear, currentPage]);

  if (!close) return null;

  return (
    <div className="userdashboardtable shadow my-3">
      <div className="dash-title d-flex justify-content-between">
        <h5 className="pt-1 ps-2">
          {heading}
          <KeyboardDoubleArrowDownIcon />
        </h5>
        <div className="d-flex align-items-center gap-2 me-2">
          <div>
            <select
              id="year"
              name="year"
              onChange={(e) => setSelectedYear(e.target.value)}
              className="drop_color2"
              value={selectedYear || ""}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
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
        <table className="w-100 border-collapse border border-gray-300 mb-5">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-start">Field</th>
              <th className="border border-gray-300 p-2 text-start">Acre</th>
              <th className="border border-gray-300 p-2 text-start">Crop</th>
            </tr>
          </thead>
          <tbody>
            {cropdata.map((item, index) => (
              <>
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2 text-start">
                    {item.field}
                  </td>
                  <td className="border border-gray-300 p-2 text-start">
                    {item.acre}
                  </td>
                  <td className="border border-gray-300 p-2 text-start">
                    {item.crop}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      )}
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalcount / rowsPerPage)} — Total:{" "}
          {totalcount}
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
            disabled={currentPage === Math.ceil(totalcount / rowsPerPage)}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CropRotationTable;
