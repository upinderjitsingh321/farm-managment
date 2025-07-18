import React, { useState } from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

function AdminChemicaltable({ heading, data }) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(4);

  const farms = data?.rows ?? [];

  const allCrops = farms.flatMap(farm =>
    farm.field_lists.flatMap(field =>
      field.crop_lists.flatMap(crop =>
        Array.isArray(crop.inputs) ? crop.inputs.map(input => ({
          ...input,
          field_no: field.field_no,
          farm_name: farm.farm_name,
          crop_name: crop.crop, // Add crop info to the input
          field_id: field.id,   // Add field ID if needed for reference
        })) : [] // Fallback if crop.inputs is not an array
      )
    )
  );
  

  const total = allCrops.length;
  const paginatedData = allCrops.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const onPageChange = (page) => {
    setCurrentPage(page);
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
              <th className="border border-gray-300 p-2">Product</th>
              <th className="border border-gray-300 p-2">Active Ingredient</th>
              <th className="border border-gray-300 p-2">Dosage/Acre</th>
              <th className="border border-gray-300 p-2">Input Name</th>
              <th className="border border-gray-300 p-2">Application Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{item.name ?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.active_ing ?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.dosage ?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.inputname ?? '-'}</td>
                <td className="border border-gray-300 p-2">
                  {item.created_at
                    ? new Date(item.created_at).toLocaleDateString()
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(total / rowsPerPage)} — Total Records: {total}
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

export default AdminChemicaltable;
