import React from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function FarmerTables(props) {
  return (
    <div className='userdashboardtable shadow my-3 croplist-height1 '>
    <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}</h5>
        <div>
            <MinimizeIcon className='pb-1'/>
        <CloseIcon className='pt-2 text-danger'/>
        </div>
    </div>
  <table className="w-100 border-collapse border border-gray-300 mb-5 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Feild </th>
              <th className="border border-gray-300 p-2"> Year</th>
              <th className="border border-gray-300 p-2"> Crop</th>
              <th className="border border-gray-300 p-2"> Acre</th>
              <th className="border border-gray-300 p-2"> Variety</th>
              <th className="border border-gray-300 p-2"> Snowing Meth.</th>
              <th className="border border-gray-300 p-2"> Irrigation Meth.</th>
              <th className="border border-gray-300 p-2"> Prodcution(Qtl) </th>
              <th className="border border-gray-300 p-2"> Note </th>
             
             
            </tr>
          </thead>
          <tbody>
          
              <tr className="border border-gray-300">
                <td className="border border-gray-300 p-2">{props.Field}</td>
                <td className="border border-gray-300 p-2">{props.Year}</td>
                <td className="border border-gray-300 p-2">{props.Crop}</td>
                <td className="border border-gray-300 p-2">{props.Acre}</td>
                <td className="border border-gray-300 p-2">{props.Variety}</td>
                <td className="border border-gray-300 p-2">{props.snowing}</td>
                <td className="border border-gray-300 p-2">{props.irrigation}</td>
                <td className="border border-gray-300 p-2">{props.prodcution}</td>
                <td className="border border-gray-300 p-2">{props.note}</td>
               
              </tr>
        
          </tbody>
          </table>
         
</div>
  )
}

export default FarmerTables
