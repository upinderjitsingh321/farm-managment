import React, { useState } from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

function AdminUserFieldTable({ heading, data, totalCount }) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5); // You can adjust this as needed

  const total = data?.count ?? 0; // Calculate total items count (fallback to 0 if not available)
  const farms = data?.rows ?? [];

  // Pagination logic - calculates the slice for the current page
  const paginatedData = farms.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
    // You can trigger an API call to fetch the new page data here if needed
  };

  if (!close) return null;

  return (
    <div className="userdashboardtable1 shadow my-3">
      <div className="dash-title d-flex justify-content-between">
        <h5 className="pt-1 ps-2">{heading}</h5>
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
        <table className="w-100 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Field</th>
              <th className="border border-gray-300 p-2">Farm</th>
              <th className="border border-gray-300 p-2">Acre</th>
              <th className="border border-gray-300 p-2">Ownership</th>
              <th className="border border-gray-300 p-2">Farm Practices</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) =>
              item.field_lists.map((field, idx) => (
                <tr key={`${index}-${idx}`} className="border border-gray-300">
                  <td className="border border-gray-300 p-2">
                    {field.field_no}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {field.farm_name}
                  </td>
                  <td className="border border-gray-300 p-2">{field.acre}</td>
                  <td className="border border-gray-300 p-2">
                    {field.landownership}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {field.farmpractices}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(total / rowsPerPage)} — Total Fields:{" "}
          {total}
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
            disabled={currentPage === Math.ceil(total / rowsPerPage)}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminUserFieldTable;
