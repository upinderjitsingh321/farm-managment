import { useState, useRef, useEffect } from 'react';
import "./style.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import ModelPlantingForm from '../../../Models/Forms/ActivityForm/AddPlanting';
import ModelHarvestForm from '../../../Models/Forms/ActivityForm/Addharvest';

function ActivityListTable(props) {

  const dropdownRef = useRef(null);
  const [showdrop, setShowdrop] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowdrop(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className='userdashboardtable shadow my-3 table-length '>
      <div className='dash-title d-flex justify-content-between'>
        <h5 className='pt-1 ps-2'>{props.heading}<KeyboardDoubleArrowDownIcon /></h5>
        <div className='profile-dropdown' ref={dropdownRef}>
          <button className='add-button' onClick={() => setShowdrop(true)}>
            <AddCircleIcon /> Add Activities<KeyboardArrowDownIcon/>
            <div className='dropdown-btn'
              style={{ display: `${showdrop ? "block" : "none"}` }}
            >
              <Link to={""} onClick={(e) => { e.preventDefault(); setModalOpen(true); }}> <img src='img/planting.png' className='img-icon' />Add Planting</Link>
              <Link to={""} onClick={(e) => { e.preventDefault(); setModalOpen1(true); }}> <img src='img/harvest.png' className='img-icon' />Add Harvest</Link>
            </div>
          </button>
        </div>

        <ModelPlantingForm show={modalOpen} onclose={() => setModalOpen(false)} />
          <ModelHarvestForm show={modalOpen1} onclose={() => setModalOpen1(false)}/>



        <div>
          <MinimizeIcon className='pb-1' />
          <CloseIcon className='pt-2 text-danger' />
        </div>
      </div>
      <table className="w-100 border-collapse border border-gray-300 mb-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Activity </th>
            <th className="border border-gray-300 p-2"> Date</th>
            <th className="border border-gray-300 p-2"> Rate</th>
            <th className="border border-gray-300 p-2"> User</th>
            <th className="border border-gray-300 p-2"> Note</th>
          </tr>
        </thead>
        <tbody>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">{props.activity}</td>
            <td className="border border-gray-300 p-2">{props.date}</td>
            <td className="border border-gray-300 p-2">{props.rate}</td>
            <td className="border border-gray-300 p-2">{props.user}</td>
            <td className="border border-gray-300 p-2">{props.note}</td>
            <td className="border border-gray-300 p-2">
              <Button variant="contained" color="success" ><EditIcon /><ArrowDropDownIcon /></Button>
            </td>

          </tr>

        </tbody>
      </table>

    </div>
  )
}

export default ActivityListTable
