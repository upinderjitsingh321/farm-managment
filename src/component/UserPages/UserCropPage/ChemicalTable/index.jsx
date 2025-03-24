import React, { useState } from 'react'
import "./style.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModelInputForm from '../../../Models/Forms/AddInputs';

function InputTable(props) {
   const [close,setClose] = useState(true)
   const [minimize,setMinimize] = useState(true)
    if (!close) return null;
  return (
    <div className='userdashboardtable shadow my-3 '>
    <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}<KeyboardDoubleArrowDownIcon/></h5>
        <ModelInputForm/>
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
      <div className='table table-responsive'>
  <table className="w-100 border-collapse border border-gray-300 mb-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2"></th>
              <th className="border border-gray-300 p-2">Inputs</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Rate</th>
              <th className="border border-gray-300 p-2">Period</th>
              <th className="border border-gray-300 p-2"> Dosage/Acre</th>
              <th className="border border-gray-300 p-2">  Date</th>
              <th className="border border-gray-300 p-2"> User</th>
              <th className="border border-gray-300 p-2"> Note</th>
            </tr>
          </thead>
          <tbody>
          
              <tr className="border border-gray-300">
              <td className="border border-gray-300 p-2">
                <Button style={{width:"0"}} variant="contained" color="success" ><EditIcon/><ArrowDropDownIcon/></Button>
              </td>
                <td className="border border-gray-300 p-2">{props.input}</td>
                <td className="border border-gray-300 p-2">{props.name}</td>
                <td className="border border-gray-300 p-2">{props.rate}</td>
                <td className="border border-gray-300 p-2">{props.period}</td>
                <td className="border border-gray-300 p-2">{props.dosage}</td>
                <td className="border border-gray-300 p-2">{props.applydate}</td>
                <td className="border border-gray-300 p-2">{props.user}</td>
                <td className="border border-gray-300 p-2">{props.note}</td>
                             
              </tr>
        
          </tbody>
          </table>
          </div>
         )}
</div>
  )
}

export default InputTable
