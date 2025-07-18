import React, { useState } from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function FarmerPersonalDetailsTable({ heading, data,totalCount }) {
    const [close, setClose] = useState(true);
    const [minimize, setMinimize] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
      const [rowsPerPage] = useState(10);  // You can adjust this as needed

      const safeData = Array.isArray(data) ? data : [];
      const total = totalCount ?? safeData.length;
    if (!close) return null;

    return (
        <div className='userdashboardtable1 shadow my-3 '>
            <div className='dash-title d-flex justify-content-between'>
                <h5 className='pt-1 ps-2'>{heading}</h5>
                <div>
                    {
                        minimize ? (
                            <MinimizeIcon className='pb-1' onClick={() => setMinimize(false)} style={{ cursor: "pointer" }} />
                        ) : (
                            <AddIcon className='pt-2' onClick={() => setMinimize(true)} style={{ cursor: "pointer" }} />
                        )
                    }
                    <CloseIcon className='pt-2 text-danger' onClick={() => setClose(false)} style={{ cursor: "pointer" }} />
                </div>
            </div>

            {minimize && (
                <table className="w-100 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-2">Farmer Name</th>
                            <th className="border border-gray-300 p-2">Father/Husband Name</th>
                            <th className="border border-gray-300 p-2">Date-of-Birth</th>
                            <th className="border border-gray-300 p-2">Mobile No.</th>
                            <th className="border border-gray-300 p-2">District</th>
                            <th className="border border-gray-300 p-2">Address</th>
                            <th className="border border-gray-300 p-2">Block</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index.id} className="border border-gray-300">
                                <td className="border border-gray-300 p-2">{item["users_detail.name"] || "—"}</td>
                                <td className="border border-gray-300 p-2">{item["users_detail.relative_name"] || "—"}</td>
                                <td className="border border-gray-300 p-2">{item["users_detail.dob"] || "—"}</td>
                                <td className="border border-gray-300 p-2">{item["users_detail.number"] || "—"}</td>
                                <td className="border border-gray-300 p-2">{item["useraddress.district"] || "—"}</td>
                                <td className="border border-gray-300 p-2">{item["useraddress.address"] || "—"}</td>
                                <td className="border border-gray-300 p-2">{item["useraddress.block"] || "—"}</td>
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


export default FarmerPersonalDetailsTable
