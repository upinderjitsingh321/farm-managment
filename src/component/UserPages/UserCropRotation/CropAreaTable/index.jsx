import React, { useState, useEffect } from 'react';
import "./style.css";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import axios from 'axios';
import { USER } from '../../../../config/endpoints';

function CropAreaTable({ heading }) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalcount, setTotalCount] = useState(0);
  const [rowsPerPage] = useState(10);
  const [cropdata, setCropdata] = useState([]);
  const [transformedData, setTransformedData] = useState([]);

  const currentYear = new Date().getFullYear();
  const dynamicYears = Array.from({ length: 5 }, (_, i) => currentYear - i).reverse();

  const access_token = localStorage.getItem("access_token");

  const groupCropDataByYear = (dataList) => {
    const grouped = {};

    dataList.forEach(item => {
      const crop = item.crop;
      const year = item.season_year;
      const acre = parseFloat(item.acre) || 0;

      if (!grouped[crop]) {
        grouped[crop] = {};
      }

      grouped[crop][year] = (grouped[crop][year] || 0) + acre;
    });

    return Object.entries(grouped).map(([crop, areaByYear]) => ({
      crop,
      areaByYear
    }));
  };

  const fetchCropHistory = async () => {
    try {
      const res = await axios.get(`${USER.USER_TOTAL_CROP_AREA}`, {
        headers: { access_token },
      });
  
      const response = res?.data?.data;
      const list = response?.list || [];
  
      setCropdata(list);
      setTotalCount(list.length); // total from full data
  
      const grouped = groupCropDataByYear(list);
      setTransformedData(grouped);
  
    } catch (error) {
      console.error("Crop History fetch failed:", error);
    }
  };

  useEffect(() => {
    fetchCropHistory();
  }, [currentPage]);

  if (!close) return null;

  return (
    <div className='userdashboardtable shadow my-3 croplist-height'>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{heading}<KeyboardDoubleArrowDownIcon /></h5>
        <div className='d-flex align-items-center gap-2 me-2'>
          <div onClick={() => setMinimize(!minimize)} style={{ cursor: "pointer" }}>
            <i className={`fa-solid ${minimize ? "fa-minus" : "fa-plus"}`}></i>
          </div>
          <div className='text-danger' onClick={() => setClose(false)} style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

      {minimize && (
        <table className="w-100 border-collapse border border-gray-300 mb-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-start">Crops</th>
              {dynamicYears.map((year, index) => (
                <th key={index} className="border border-gray-300 p-2 text-start">
                  <span className="text-muted">{year}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transformedData.map((item, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2 text-start">{item.crop}</td>
                {dynamicYears.map((year, idx) => (
                  <td key={idx} className="border border-gray-300 p-2 text-start">
                    {item.areaByYear?.[`${dynamicYears[idx-1]}-${year}`] ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="p-2 text-start">Total Farm [ac]</th>
              {dynamicYears.map((year, index) => {
                const total = transformedData.reduce((sum, crop) => {
                  return sum + (crop.areaByYear?.[`${dynamicYears[index-1]}-${year}`] || 0);
                }, 0);
                return (
                  <th key={index} className="border border-gray-300 p-2 text-start">
                    {total > 0 ? total.toFixed(2) : "-"}
                  </th>
                );
              })}
            </tr>
          </tfoot>
        </table>
      )}

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalcount / rowsPerPage)} — Total: {totalcount}
        </div>
        <div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={currentPage === Math.ceil(totalcount / rowsPerPage)}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CropAreaTable;
