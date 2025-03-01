import React from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ModelChemicalForm from '../../../Models/Forms/AddChemical';

function Chemicaltable(props) {
  return (
    <div className='userdashboardtable shadow my-3 table-length '>
    <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}<KeyboardDoubleArrowDownIcon/></h5>
        <ModelChemicalForm/>
        <div>
            <MinimizeIcon className='pb-1'/>
        <CloseIcon className='pt-2 text-danger'/>
        </div>
    </div>
  <table className="w-100 border-collapse border border-gray-300 mb-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Product</th>
              <th className="border border-gray-300 p-2"> Dosage/Acre</th>
              <th className="border border-gray-300 p-2"> Application Date</th>
              <th className="border border-gray-300 p-2"> Note</th>
            </tr>
          </thead>
          <tbody>
          
              <tr className="border border-gray-300">
                <td className="border border-gray-300 p-2">{props.product}</td>
                <td className="border border-gray-300 p-2">{props.dosage}</td>
                <td className="border border-gray-300 p-2">{props.applydate}</td>
                <td className="border border-gray-300 p-2">{props.note}</td>
             
               
              </tr>
        
          </tbody>
          </table>
         
</div>
  )
}

export default Chemicaltable
