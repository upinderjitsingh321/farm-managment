import React, { useEffect, useState } from 'react';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { USER } from '../../../../config/endpoints';

function SoilDashboardTable({ heading = "Soil Dashboard", link = "View All" }) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [soilData, setSoilData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const access_token = localStorage.getItem("access_token");

  const fetchSoilData = async () => {
    try {
      const res = await axios.get(
        `${USER.SHORT_SOIL_LIST}?rows=${rowsPerPage}`,
        {
          headers: { access_token },
        }
      );
      const response = res?.data?.data;
      setSoilData(response?.list || []);
    } catch (error) {
      console.error("Soil data fetch failed:", error);
    }
  };

  useEffect(() => {
    fetchSoilData();
  }, [rowsPerPage]);

  if (!close) return null;

  return (
    <div className='userdashboardtable2 shadow'>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{heading}</h5>
        <div>
          {minimize ? (
            <MinimizeIcon className='pb-1' onClick={() => setMinimize(false)} style={{ cursor: "pointer" }} />
          ) : (
            <AddIcon className='pt-2' onClick={() => setMinimize(true)} style={{ cursor: "pointer" }} />
          )}
          <CloseIcon className='pt-2 text-danger' onClick={() => setClose(false)} style={{ cursor: "pointer" }} />
        </div>
      </div>

      {minimize && (
        <div>
          <table className="w-100 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Field</th>
                <th className="border border-gray-300 p-2">Soil Type</th>
                <th className="border border-gray-300 p-2">Issue Faced</th>
                <th className="border border-gray-300 p-2">Organic Matter</th>
              </tr>
            </thead>
            <tbody>
              {soilData.length > 0 ? (
                soilData.map((soil, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="border border-gray-300 p-2">{soil.field_no}</td>
                    <td className="border border-gray-300 p-2">{soil.soiltype}</td>
                    <td className="border border-gray-300 p-2">{soil.issue}</td>
                    <td className="border border-gray-300 p-2">{soil.o_matter}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-3 text-muted">No soil data found</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className='mt-4 text-end arrowdiv'>
            <Link to="/soilpage" style={{ color: 'rgb(79 110 79)' }}>
              {link}
              <ArrowForwardIcon
                style={{
                  backgroundColor: "rgb(79 110 79)",
                  color: "white",
                  borderRadius: "50%",
                  marginRight: "10px",
                  marginLeft: "10px",
                  fontSize: "20px"
                }}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SoilDashboardTable;
