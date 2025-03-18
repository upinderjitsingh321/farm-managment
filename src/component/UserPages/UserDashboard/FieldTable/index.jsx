import React, { useState } from 'react';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function FieldDashboardTable(props) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);

  if (!close) return null;

  return (
    <div className='userdashboardtable2 shadow'>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}</h5>
        <div>
          {
          minimize ? (
            <MinimizeIcon className='pb-1' onClick={() => setMinimize(false)} style={{ cursor: "pointer" }} />
          ) : (
            <AddIcon className='pt-2' onClick={() => setMinimize(true)} style={{ cursor: "pointer" }} />
          )}
          <CloseIcon className='pt-2 text-danger' onClick={() => setClose(false)} style={{ cursor: "pointer" }} />
        </div>
      </div>

      {minimize && (

        <table className="w-100 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Field No.</th>
              <th className="border border-gray-300 p-2">Acre</th>
              <th className="border border-gray-300 p-2">Crops</th>
              <th className="border border-gray-300 p-2">Variety</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="border border-gray-300 p-2">{props.field}</td>
              <td className="border border-gray-300 p-2">{props.acre}</td>
              <td className="border border-gray-300 p-2">{props.crops}</td>
              <td className="border border-gray-300 p-2">{props.variety}</td>
            </tr>
          </tbody>
        </table>
      )}
      {minimize && (
        <div className='mt-5 text-end arrowdiv'>
          <Link to={'/userfield'} style={{ color: 'rgb(79 110 79)' }}>
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
      )}

    </div>
  );
}

export default FieldDashboardTable;
