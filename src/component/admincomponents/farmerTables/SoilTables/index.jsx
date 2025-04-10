import React, { useState } from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

import "./style.css"
function AdminSoilTable(props) {
    const [close, setClose] = useState(true);
      const [minimize, setMinimize] = useState(true);
      if (!close) return null;
  return (
    <div className='userdashboardtable shadow my-3 '>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}</h5>
        <div>
                    {
                        minimize ?
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
            <th className="border border-gray-300 p-2"> Soil Type</th>
            <th className="border border-gray-300 p-2"> Issued Faced</th>
            <th className="border border-gray-300 p-2"> Organic Matter</th>
            <th className="border border-gray-300 p-2">  Electrical Conductivity (dS/m)</th>
            <th className="border border-gray-300 p-2">Soil Salinity </th>
            <th className="border border-gray-300 p-2"> Soil Texture</th>
            <th className="border border-gray-300 p-2"> Soil pH Level </th>


          </tr>
        </thead>
        <tbody>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">{props.farm}</td>
            <td className="border border-gray-300 p-2">{props.field}</td>
            <td className="border border-gray-300 p-2">{props.soiltype}</td>
            <td className="border border-gray-300 p-2">{props.issues}</td>
            <td className="border border-gray-300 p-2">{props.organic}</td>
            <td className="border border-gray-300 p-2">{props.electricalconductivity}</td>
            <td className="border border-gray-300 p-2">{props.soilsaninity}</td>
            <td className="border border-gray-300 p-2">{props.soiltexture}</td>
            <td className="border border-gray-300 p-2">{props.phlevel}</td>

          </tr>

        </tbody>
      </table>
      )}
    </div>
  )
}

export default AdminSoilTable
