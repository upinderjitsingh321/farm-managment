import React, { useState } from 'react';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function AdminUserFarmTable({ heading, data }) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5); // You can adjust this as needed

  const farms = data?.rows ?? [];  // ✅ First define farms
  const total = farms.length;      // ✅ Then get total length

  // Pagination logic
  const paginatedData = farms.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
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
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <AddIcon
              className="pt-2"
              onClick={() => setMinimize(true)}
              style={{ cursor: 'pointer' }}
            />
          )}
          <CloseIcon
            className="pt-2 text-danger"
            onClick={() => setClose(false)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {minimize && (
        <table className="w-100 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Farm Id</th>
              <th className="border border-gray-300 p-2">Farm Name</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Created</th>
              <th className="border border-gray-300 p-2">Owner</th>
              {/* <th className="border border-gray-300 p-2">Active</th> */}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{item.farm_id ? item.farm_id : `#${item.id}`}</td>
                <td className="border border-gray-300 p-2">{item.farm_name || '-'}</td>
                <td className="border border-gray-300 p-2">{item.is_organic ? 'Organic' : 'Non-Organic'}</td>
                <td className="border border-gray-300 p-2">
                  {item.created_at ? new Date(item.created_at).toLocaleDateString() : '-'}
                </td>
                <td className="border border-gray-300 p-2">{item.owner || '-'}</td>
                {/* <td className="border border-gray-300 p-2">Active</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.max(1, Math.ceil(total / rowsPerPage))} — Total Farms: {total}
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
            disabled={currentPage === Math.ceil(total / rowsPerPage) || total === 0}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminUserFarmTable;
