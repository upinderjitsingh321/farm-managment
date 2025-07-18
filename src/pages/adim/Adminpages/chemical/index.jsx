import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { USER } from "../../../../config/endpoints";

function ChemicalRecordsTable() {
  const [chemicaldata, setChemicaldata] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const access_token = localStorage.getItem("access_token");

  // Fetch chemical data with pagination
  const handledata = async () => {
    try {
      const result = await axios.get(`${USER.CHEMICALS_LIST}`, {
        headers: { access_token },
        params: {
          page: currentPage,
          limit: rowsPerPage,
        },
      });

      const response = result?.data?.data;
      setChemicaldata(response?.inputs || []);
      setTotalCount(response?.totalChemicalItems || 0); // FIX: Use correct key
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  // Handle page change
  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalCount / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };


  // Delete chemical record
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this record?");
      if (!confirmDelete) return;
      
      // Make the delete API call
      const response = await axios.delete(`${USER.DELETE_CHEMICAL}/${id}`, {
        headers: {
          access_token,
        },
      });
      if (response.status === 200) {
        // Update the state to remove the deleted record from the list
        setChemicaldata(chemicaldata.filter((chemical) => chemical.id !== id));
        alert("Chemical record deleted successfully.");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete the chemical record.");
    }
  };


  useEffect(() => {
    handledata();
  }, [currentPage, rowsPerPage]); // FIX: Also re-fetch if rowsPerPage changes

  return (
    <div className="p-4">
      <h2 className="text-center fs-2">Chemical Analysis Records</h2>
      <div className="heading-list"></div>

      <table className="w-100 mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Id</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Product</th>
            <th className="border border-gray-300 p-2">Active Ingredient</th>
            <th className="border border-gray-300 p-2">Dosage/Acre</th>
            <th className="border border-gray-300 p-2">Application Date</th>
            <th className="border border-gray-300 p-2">Manufacturer</th>
            <th className="border border-gray-300 p-2">Price</th>
            {/* <th className="border border-gray-300 p-2">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {chemicaldata.map((list) => (
            <tr key={list.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{list.id}</td>
              <td className="border border-gray-300 p-2">{list.inputname}</td>
              <td className="border border-gray-300 p-2">{list.name}</td>
              <td className="border border-gray-300 p-2">{list.active_ing}</td>
              <td className="border border-gray-300 p-2">{list.dosage}</td>
              <td className="border border-gray-300 p-2">
                {new Date(list.created_at).toISOString().split("T")[0]}
              </td>
              <td className="border border-gray-300 p-2">{list.manufacture_com}</td>
              <td className="border border-gray-300 p-2">{list.rate}</td>
              <td className="border border-gray-300 p-2">
                   <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(list.id)}
                >
                  Delete
                </Button>
              </td>
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

export default ChemicalRecordsTable;
