import React, { useState } from 'react'
import "./style.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ModelCropForm from '../../../Models/Forms/CropForm';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function CropListTable(props) {
  const [close, setClose] = useState(true)
  const [minimize, setMinimize] = useState(true)

  if (!close) return null;
  return (

    <div className='userdashboardtable shadow my-3 ' style={{paddingBottom: `${minimize ?"195px":"0"}`}}>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>
          {props.heading} <KeyboardDoubleArrowDownIcon />
        </h5>


        <ModelCropForm />

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
        <table className="w-100 border-collapse border border-gray-300 mb-5 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Field</th>
              <th className="border border-gray-300 p-2">Year</th>
              <th className="border border-gray-300 p-2">Crop</th>
              <th className="border border-gray-300 p-2">Acre</th>
              <th className="border border-gray-300 p-2">Variety</th>
              <th className="border border-gray-300 p-2">Snowing Meth.</th>
              <th className="border border-gray-300 p-2">Irrigation Meth.</th>
              <th className="border border-gray-300 p-2">Production (Qtl)</th>
              <th className="border border-gray-300 p-2">Note</th>
              <th className="border border-gray-300 p-2">Actions</th>
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
              <td className="border border-gray-300 p-2">{props.production}</td>
              <td className="border border-gray-300 p-2">{props.note}</td>
              <td className="border border-gray-300 p-2">
                <Button variant="contained" color="success">
                  <EditIcon /><ArrowDropDownIcon />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>



  )
}

export default CropListTable;
