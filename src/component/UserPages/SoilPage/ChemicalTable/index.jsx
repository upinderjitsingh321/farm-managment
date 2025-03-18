import React, { useState } from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ModelChemicalForm from '../../../Models/Forms/AddChemical';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Chemicaltable(props) {
  const [close,setClose] =useState(true)
      const [minimize, setMinimize] = useState(true)
    
      if(!close) return null
  return (
    <div className='userdashboardtable shadow '>
    <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}<KeyboardDoubleArrowDownIcon/></h5>
        <ModelChemicalForm/>
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
              <th className="border border-gray-300 p-2">Product</th>
              <th className="border border-gray-300 p-2">Active Ingredient</th>
              <th className="border border-gray-300 p-2"> Dosage/Acre</th>
              <th className="border border-gray-300 p-2"> Application Date</th>
              <th className="border border-gray-300 p-2"> Manufacturer</th>
              <th className="border border-gray-300 p-2"> Price</th>
            </tr>
          </thead>
          <tbody>
          
              <tr className="border border-gray-300">
                <td className="border border-gray-300 p-2">{props.farm}</td>
                <td className="border border-gray-300 p-2">{props.field}</td>
                <td className="border border-gray-300 p-2">{props.product}</td>
                <td className="border border-gray-300 p-2">{props.activengredient}</td>
                <td className="border border-gray-300 p-2">{props.dosage}</td>
                <td className="border border-gray-300 p-2">{props.manufacture}</td>
                <td className="border border-gray-300 p-2">{props.applydate}</td>
                <td className="border border-gray-300 p-2">{props.Price}</td>
                <td className="border border-gray-300 p-2">
                <Button variant="contained" color="success" ><EditIcon/><ArrowDropDownIcon/></Button>
              </td>
               
              </tr>
        
          </tbody>
          </table>
         )}
</div>
  )
}

export default Chemicaltable
