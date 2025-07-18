import React, { useState } from 'react';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function AdminCropListTable({ heading, data }) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(4); // You can adjust this as needed
  
  const farms = data?.rows ?? [];
  const allCrops = farms.flatMap(farm =>
    farm.field_lists.flatMap(field =>
      field.crop_lists.map(crop => ({
        ...crop,
        field_no: field.field_no,
        farm_name: farm.farm_name
      }))
    )
  );
  const total = allCrops.length;
  const paginatedData = allCrops.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  if (!close) return null;

  // Ensure data is an array before calling .map()
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
              <th className="border border-gray-300 p-2">Field</th>
              <th className="border border-gray-300 p-2">Year</th>
              <th className="border border-gray-300 p-2">Crop</th>
              <th className="border border-gray-300 p-2">Acre</th>
              <th className="border border-gray-300 p-2">Variety</th>
              <th className="border border-gray-300 p-2">Sowing Meth.</th>
              <th className="border border-gray-300 p-2">Irrigation Meth.</th>
              <th className="border border-gray-300 p-2">Production (Qtl)</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{item.field_no}</td>
                <td className="border border-gray-300 p-2">{item.season_year || '-'}</td>
                <td className="border border-gray-300 p-2">{item.crop || '-'}</td>
                <td className="border border-gray-300 p-2">{item.acre || '-'}</td>
                <td className="border border-gray-300 p-2">{item.variety || '-'}</td>
                <td className="border border-gray-300 p-2">{item.snowing_mth || '-'}</td>
                <td className="border border-gray-300 p-2">{item.irrigation_mth || '-'}</td>
                <td className="border border-gray-300 p-2">{item.production || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
       <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(total / rowsPerPage)} — Total
          Fields: {total}
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

export default AdminCropListTable;
