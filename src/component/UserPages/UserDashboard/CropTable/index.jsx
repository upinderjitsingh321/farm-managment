import React, { useEffect, useState } from 'react';
import "./style.css";
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { USER } from "../../../../config/endpoints";

function CropDashboardTable(props ) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [croplist, setCroplist] = useState([]);
  const [rows, setRows] = useState(4);

  const access_token = localStorage.getItem("access_token");

  const handledata = async () => {
    try {
      const result = await axios.get(
        `${USER.CROP_LIST}?&rows=${rows}`,
        {
          headers: { access_token },
        }
      );
      const response = result?.data?.data;
      setCroplist(response?.list || []);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    handledata();
  }, [ rows]);

  if (!close) return null;

  return (
    <div className='userdashboardtable2 shadow'>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}</h5>
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
                <th className="border border-gray-300 p-2">Crop Name</th>
                <th className="border border-gray-300 p-2">Acre</th>
                <th className="border border-gray-300 p-2">Expected Production</th>
                <th className="border border-gray-300 p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {croplist.length > 0 ? (
                croplist.map((crop, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="border border-gray-300 p-2">{crop.crop}</td>
                    <td className="border border-gray-300 p-2">{crop.acre}</td>
                    <td className="border border-gray-300 p-2">{crop.production}</td>
                    <td className="border border-gray-300 p-2">{crop.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-3 text-muted">No crop data found</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className='mt-4 text-end arrowdiv'>
            <Link to="/croppage" style={{ color: 'rgb(79 110 79)' }}>
              {props.link}
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

export default CropDashboardTable;
