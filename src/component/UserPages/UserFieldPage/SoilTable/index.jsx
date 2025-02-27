import React from 'react'
import "./style.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import ModelSoilForm from '../../../Models/Forms/Soilform';

function UserSoilTable(props) {
  return (
    <div className='userdashboardtable shadow my-3'>
    <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}</h5>
        <ModelSoilForm/>
        <div>
            <MinimizeIcon className='pb-1'/>
        <CloseIcon className='pt-2 text-danger'/>
        </div>
    </div>
  <table className="w-100 border-collapse border border-gray-300 mb-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Field</th>
              <th className="border border-gray-300 p-2"> Soil Type</th>
              <th className="border border-gray-300 p-2"> Issued Faced</th>
              <th className="border border-gray-300 p-2"> Organic Matter</th>
             
             
            </tr>
          </thead>
          <tbody>
          
              <tr className="border border-gray-300">
                <td className="border border-gray-300 p-2">{props.field}</td>
                <td className="border border-gray-300 p-2">{props.type}</td>
                <td className="border border-gray-300 p-2">{props.issue}</td>
                <td className="border border-gray-300 p-2">{props.organic}</td>
               
              </tr>
        
          </tbody>
          </table>
          
</div>
  )
}

export default UserSoilTable
