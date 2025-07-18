import React, { useState, useEffect } from 'react';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

import "./style.css";

function AdminSoilTable({ heading, data, totalCount }) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
   const [rowsPerPage] = useState(4); // You can adjust this as needed
 
   const farms = data?.rows ?? [];
 
   const allCrops = farms.flatMap(farm =>
     farm.field_lists.flatMap(field =>
       field.soil_lists.map(crop => ({
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

   const onPageChange = (page) => {
    setCurrentPage(page);
  };




  if (!close) return null;

  return (
    <div className='userdashboardtable shadow my-3'>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{heading}</h5>
        <div>
          {minimize ? 
            <MinimizeIcon className='pb-1' onClick={() => setMinimize(false)} style={{ cursor: "pointer" }} />
            : 
            <AddIcon className='pt-2' onClick={() => setMinimize(true)} style={{ cursor: "pointer" }} />
          }
          <CloseIcon className='pt-2 text-danger' onClick={() => setClose(false)} style={{ cursor: "pointer" }} />
        </div>
      </div>

      {minimize && (
        <table className="w-100 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Farm</th>
              <th className="border border-gray-300 p-2">Field</th>
              <th className="border border-gray-300 p-2">Soil Type</th>
              <th className="border border-gray-300 p-2">Issued Faced</th>
              <th className="border border-gray-300 p-2">Organic Matter</th>
              <th className="border border-gray-300 p-2">Electrical Conductivity (dS/m)</th>
              <th className="border border-gray-300 p-2">Soil Salinity</th>
              <th className="border border-gray-300 p-2">Soil Texture</th>
              <th className="border border-gray-300 p-2">Soil pH Level</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{item.farm_no?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.field_no?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.soiltype?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.issue?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.o_matter?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.e_conductivity?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.s_salinity?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.s_texture?? '-'}</td>
                <td className="border border-gray-300 p-2">{item.s_ph?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(total / rowsPerPage)} — Total Fields: {total}
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

export default AdminSoilTable;
