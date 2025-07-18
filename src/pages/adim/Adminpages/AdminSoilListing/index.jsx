import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { USER } from "../../../../config/endpoints";

function SoilRecordsTable() {
  const [soildata, setSoilData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const access_token = localStorage.getItem("access_token");

  const handleData = async () => {
    try {
      const result = await axios.get(USER.CHEMICALS_LIST, {
        headers: { access_token },
        params: {
          page: currentPage,
          limit: rowsPerPage,
        },
      });

      const response = result?.data?.data;
      setSoilData(response?.soil || []);
      setTotalCount(response?.totalSoilItems || 0); // 👉 Corrected to totalSoilItems
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalCount / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    handleData();
  }, [currentPage]);

  return (
    <div className="p-4">
      <h2 className="text-center fs-2">Soil Analysis Records</h2>

      <table className="w-100 mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Issue</th>
            <th className="border border-gray-300 p-2">Organic Matters</th>
            <th className="border border-gray-300 p-2">EC (dS/m)</th>
            <th className="border border-gray-300 p-2">Soil Type</th>
            <th className="border border-gray-300 p-2">Soil Texture</th>
            <th className="border border-gray-300 p-2">pH Level</th>
            <th className="border border-gray-300 p-2">Moisture</th>
            <th className="border border-gray-300 p-2">Salinity</th>
            {/* <th className="border border-gray-300 p-2">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {soildata.map((record) => (
            <tr key={record.id}>
              <td className="border border-gray-300 p-2">{record.id}</td>
              <td className="border border-gray-300 p-2">{record.issue}</td>
              <td className="border border-gray-300 p-2">{record.o_matter}</td>
              <td className="border border-gray-300 p-2">{record.e_conductivity}</td>
              <td className="border border-gray-300 p-2">{record.soiltype}</td>
              <td className="border border-gray-300 p-2">{record.s_texture}</td>
              <td className="border border-gray-300 p-2">{record.s_ph}</td>
              <td className="border border-gray-300 p-2">{record.moistureValue}</td>
              <td className="border border-gray-300 p-2">{record.s_salinity}</td>
              {/* <td className="border border-gray-300 p-2">
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total Records: {totalCount}
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

export default SoilRecordsTable;
