import React from 'react'
import "./style.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function UserFarmTable(props) {
  return (
    <div className='userdashboardtable shadow my-3 '>
    <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}<KeyboardDoubleArrowDownIcon/></h5>
        <div>
            <MinimizeIcon className='pb-1'/>
        <CloseIcon className='pt-2 text-danger'/>
        </div>
    </div>
  <table className="w-100 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Farm Id</th>
              <th className="border border-gray-300 p-2"> Farm Name</th>
              <th className="border border-gray-300 p-2"> Type</th>
              <th className="border border-gray-300 p-2"> Created</th>
              <th className="border border-gray-300 p-2"> Owner</th>
              <th className="border border-gray-300 p-2"> Fields</th>
              <th className="border border-gray-300 p-2"> Acre</th>
              <th className="border border-gray-300 p-2"> Active</th>
             
             
            </tr>
          </thead>
          <tbody>
          
              <tr className="border border-gray-300">
                <td className="border border-gray-300 p-2">{props.FarmId}</td>
                <td className="border border-gray-300 p-2">{props.FarmName}</td>
                <td className="border border-gray-300 p-2">{props.Type}</td>
                <td className="border border-gray-300 p-2">{props.Created}</td>
                <td className="border border-gray-300 p-2">{props.Owner}</td>
                <td className="border border-gray-300 p-2">{props.Fields}</td>
                <td className="border border-gray-300 p-2">{props.Acre}</td>
                <td className="border border-gray-300 p-2">{props.Active}</td>
               
              </tr>
        
          </tbody>
          </table>
         
</div>
  )
}

export default UserFarmTable
