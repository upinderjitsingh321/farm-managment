import React from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
function AdminNutrient(props) {
  return (
    <div className='userdashboardtable1 shadow  mb-4 '>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}</h5>
        <div>
          <MinimizeIcon className='pb-1' />
          <CloseIcon className='pt-2 text-danger' />
        </div>
      </div>
      <table className="w-100 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Nitrogen</th>
            <th className="border border-gray-300 p-2">Phosphorus </th>
            <th className="border border-gray-300 p-2">Potassium </th>
            <th className="border border-gray-300 p-2">Calcium </th>
            <th className="border border-gray-300 p-2">Magnesium </th>
            <th className="border border-gray-300 p-2">Sulfur </th>
            <th className="border border-gray-300 p-2"> Iron  </th>
            <th className="border border-gray-300 p-2">  Manganese </th>
            <th className="border border-gray-300 p-2"> Zinc</th>
            <th className="border border-gray-300 p-2"> Copper </th>
            <th className="border border-gray-300 p-2"> Chlorine  </th>
            <th className="border border-gray-300 p-2"> Boron   </th>


          </tr>
        </thead>
        <tbody>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">{props.Nitrogen}</td>
            <td className="border border-gray-300 p-2">{props.Phosphorus}</td>
            <td className="border border-gray-300 p-2">{props.Potassium}</td>
            <td className="border border-gray-300 p-2">{props.Calcium}</td>
            <td className="border border-gray-300 p-2">{props.Magnesium}</td>
            <td className="border border-gray-300 p-2">{props.Sulfur}</td>
            <td className="border border-gray-300 p-2">{props.Iron}</td>
            <td className="border border-gray-300 p-2">{props.Manganese}</td>
            <td className="border border-gray-300 p-2">{props.Zinc}</td>
            <td className="border border-gray-300 p-2">{props.Copper}</td>
            <td className="border border-gray-300 p-2">{props.Chlorine}</td>
            <td className="border border-gray-300 p-2">{props.Boron}</td>

          </tr>

        </tbody>
      </table>

    </div>
  )
}

export default AdminNutrient