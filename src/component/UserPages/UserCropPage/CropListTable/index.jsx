import React, { useEffect, useState } from 'react'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ModelCropForm from '../../../Models/Forms/CropForm';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CropListTable({
  heading,
  data,
  currentPage,
  rowsPerPage,
  totalCount,
  onPageChange,
  
}) {
  const [close, setClose] = useState(true)
  const [minimize, setMinimize] = useState(true)


  if (!close) return null;
  return (

    <div className='userdashboardtable shadow my-3 ' style={{ paddingBottom: `${minimize ? "209px" : "0"}` }}>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>
          {heading} <KeyboardDoubleArrowDownIcon />
        </h5>


        <ModelCropForm />

        <div className='d-flex align-items-center gap-2 me-2'>
        <select className="drop_color1">
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>
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
        <div class="table-responsive">
          <table className="w-100 border-collapse border border-gray-300 mb-5 table-borderless">
            <thead>
              <tr className="bg-gray-200  ">
                <th className="border border-gray-300 p-2"></th>
                <th className="border border-gray-300 p-2">Field</th>
                <th className="border border-gray-300 p-2">Crop</th>
                <th className="border border-gray-300 p-2">Acre</th>
                <th className="border border-gray-300 p-2">Variety</th>
                <th className="border border-gray-300 text-nowrap p-2">Sowing Meth.</th>
                <th className="border border-gray-300 text-nowrap p-2">Irrigation Meth.</th>
                <th className="border border-gray-300 p-2">Planting</th>
                <th className="border border-gray-300 p-2">Harvest</th>
                <th className="border border-gray-300 text-nowrap p-2">Production (Qtl)</th>
                <th className="border border-gray-300 text-nowrap p-2">Expected Price</th>
                <th className="border border-gray-300 p-2">Note</th>
                <th className="border border-gray-300 p-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Herbicide
                      </Tooltip>
                    }
                  >
                    <img className='th_img' src='img/herbicide.png' />
                  </OverlayTrigger>
                </th>
                <th className="border border-gray-300 p-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Fertilizer
                      </Tooltip>
                    }
                  >
                    <img className='th_img' src='img/fertilizer.png' />
                  </OverlayTrigger>
                </th>
                <th className="border border-gray-300 p-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Manure
                      </Tooltip>
                    }
                  >
                    <img className='th_img' src='img/manure.png' />
                  </OverlayTrigger>
                </th>
                <th className="border border-gray-300 p-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Insecticide
                      </Tooltip>
                    }
                  >
                    <img className='th_img' src='img/bio-pesticide.png' />
                  </OverlayTrigger>
                </th>
                <th className="border border-gray-300 p-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Fungicide
                      </Tooltip>
                    }
                  >
                    <img className='th_img' src='img/fungicide.png' />
                  </OverlayTrigger>
                </th>

                <th className="border border-gray-300 p-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Activity
                      </Tooltip>
                    }
                  >
                    <img className='th_img' src='img/tractor.png' />
                  </OverlayTrigger>
                </th>




              </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">
                  <Button variant="contained" color="success">
                    <EditIcon /><ArrowDropDownIcon />
                  </Button>
                </td>
                <td className="border-top border-gray-300 p-2">{item.Field}</td>
                <td className="border-top border-gray-300 p-2">{item.Crop}</td>
                <td className="border-top border-gray-300 p-2">{item.Acre}</td>
                <td className="border-top border-gray-300 p-2">{item.Variety}</td>
                <td className="border-top border-gray-300 p-2">{item.sowing}</td>
                <td className="border-top border-gray-300 p-2">{item.irrigation}</td>
                <td className="border-top border-gray-300 p-2">{item.planting}</td>
                <td className="border-top border-gray-300 p-2">{item.harvest}</td>
                <td className="border-top border-gray-300 p-2">{item.production}</td>
                <td className="border-top border-gray-300 p-2">{item.price}</td>
                <td className="border-top border-gray-300 p-2">{item.note}</td>


              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total
          Farms: {totalCount}
        </div>
        <div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={currentPage === Math.ceil(totalCount / rowsPerPage)}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>



  )
}

export default CropListTable;
