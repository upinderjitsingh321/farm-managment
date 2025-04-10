import React, { useState } from 'react'
import "./style.css"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
  
function CropRotationTable(props) {
   const [close,setClose]=useState(true)
   const [minimize,setMinimize]=useState(true)
    if(!close) return null
  return (
    <div className='userdashboardtable shadow my-3 '>
    <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}<KeyboardDoubleArrowDownIcon/></h5>
        
     
        <div className='d-flex align-items-center gap-2 me-2'>
        {
            minimize ?
              <div className='' onClick={() => setMinimize(false)} style={{ cursor: "pointer" }} ><i class="fa-solid fa-minus" ></i>
               </div>
              
              
              :
              <div className='' onClick={() => setMinimize(true)} style={{ cursor: "pointer" }} ><i class="fa-solid fa-plus"></i></div>
          }
              <div className='text-danger' onClick={() => setClose(false)} style={{ cursor: "pointer" }} ><i class="fa-solid fa-xmark"></i></div>
              </div>
      </div>
    {minimize && (
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
         )}
</div>
  )
}

export default CropRotationTable
