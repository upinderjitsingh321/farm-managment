import React, { useState } from 'react'
import "./style.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ModelCropRotaionForm from '../../../Models/Forms/AddCropRotaion';

function CropRotationTable(props) {
   const [close,setClose]=useState(true)
    if(!close) return null
  return (
    <div className='userdashboardtable shadow my-3 '>
    <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}<KeyboardDoubleArrowDownIcon/></h5>
        <ModelCropRotaionForm/>
        <div>
            <MinimizeIcon className='pb-1'/>
        <CloseIcon className='pt-2 text-danger' onClick={( )=> setClose(false)} style={{cursor:"pointer"}}/>
        </div>
    </div>
  <table className="w-100 border-collapse border border-gray-300 mb-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Fields </th>
              <th className="border border-gray-300 p-2"> Acre</th>
              <th className="border border-gray-300 p-2"> 2022</th>
              <th className="border border-gray-300 p-2"> 2023</th>
              <th className="border border-gray-300 p-2"> 2024</th>
              <th className="border border-gray-300 p-2"> 2025</th>
              <th className="border border-gray-300 p-2"> 2026</th>
             
            </tr>
          </thead>
          <tbody>
          
              <tr className="border border-gray-300">
                <td className="border border-gray-300 p-2">{props.fields}</td>
                <td className="border border-gray-300 p-2">{props.acre}</td>
                <td className="border border-gray-300 p-2">{props.year1}</td>
                <td className="border border-gray-300 p-2">{props.year2}</td>
                <td className="border border-gray-300 p-2">{props.year3}</td>
                <td className="border border-gray-300 p-2">{props.year4}</td>
                <td className="border border-gray-300 p-2">{props.year5}</td>
               
             
               
              </tr>
        
          </tbody>
          </table>
         
</div>
  )
}

export default CropRotationTable
