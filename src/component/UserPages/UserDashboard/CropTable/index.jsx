import React from 'react'
import "./style.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Link } from 'react-router-dom';
function CropDashboardTable(props) {
  return (
    <div className='userdashboardtable shadow'>
        <div className='dash-title d-flex justify-content-between'>
            <h5 className='pt-1 ps-2'>{props.heading}</h5>
            <div>
                <MinimizeIcon className='pb-1'/>
            <CloseIcon className='pt-2 text-danger'/>
            </div>
        </div>
      <table className="w-100 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Crop Name</th>
                  <th className="border border-gray-300 p-2"> Acre</th>
                  <th className="border border-gray-300 p-2">Expected Producton</th>
                  <th className="border border-gray-300 p-2"> Price</th>
                 
                 
                </tr>
              </thead>
              <tbody>
              
                  <tr className="border border-gray-300">
                    <td className="border border-gray-300 p-2">{props.cropname}</td>
                    <td className="border border-gray-300 p-2">{props.acre}</td>
                    <td className="border border-gray-300 p-2">{props.production}</td>
                    <td className="border border-gray-300 p-2">{props.rate}</td>
                   
                  </tr>
            
              </tbody>
              </table>
              <div className='mt-5  text-end arrowdiv'>
          <Link to={"/croppage"} style={{color:'rgb(79 110 79)'}}>{props.link}
          <ArrowForwardIcon style={{backgroundColor:"rgb(79 110 79)",color:"white",borderRadius:"50%",marginRight:"10px",marginLeft:"10px", fontSize: "20px"}}/>
          </Link>
          </div>
    </div>
  )
}

export default CropDashboardTable
