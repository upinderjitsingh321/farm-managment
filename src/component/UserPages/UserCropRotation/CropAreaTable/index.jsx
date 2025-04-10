import React, { useState } from 'react'
import "./style.css"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function CropAreaTable(props) {
  const [close, setClose] = useState(true)
  const [minimize, setMinimize] = useState(true)
  if (!close) return null
  return (
    <div className='userdashboardtable shadow my-3 croplist-height '>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}<KeyboardDoubleArrowDownIcon /></h5>
       
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
        <table className="w-100 border-collapse border border-gray-300 mb-5 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Crops </th>
              <th className="border border-gray-300 p-2"> Total Production(Qtl.)</th>
              <th className="border border-gray-300 p-2"> Year1</th>
              <th className="border border-gray-300 p-2"> Year2</th>
              <th className="border border-gray-300 p-2"> Year3</th>
              <th className="border border-gray-300 p-2"> Year4</th>
              <th className="border border-gray-300 p-2"> Year5</th>



            </tr>
          </thead>
          <tbody>

            <tr className="border border-gray-300">
              <td className="border border-gray-300 p-2">{props.crops}</td>
              <td className="border border-gray-300 p-2">{props.production}</td>
              <td className="border border-gray-300 p-2">{props.year1}</td>
              <td className="border border-gray-300 p-2">{props.year2}</td>
              <td className="border border-gray-300 p-2">{props.year3}</td>
              <td className="border border-gray-300 p-2">{props.year4}</td>
              <td className="border border-gray-300 p-2">{props.year5}</td>
            </tr>

          </tbody>
          <tr>
              <th>Total Farm[ac]</th>
            </tr>
        </table>
      )}
    </div>
  )
}

export default CropAreaTable
