import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import Button from "@mui/material/Button";
import { FaCircleUser } from "react-icons/fa6";
import PersonIcon from '@mui/icons-material/Person';

function DashboardBox(props) {

    const getIcon = () => {
        switch (props.tittle) {
          case "Profile":
            return <FaCircleUser/>;
          case "activeprofile":
            return <PersonIcon/>;
          case "profile":
            return <FaCircleUser/>;
          case "activeprofile":
            return <PersonIcon/>;
          default:
            return props.icon || null; // Use default icon if provided
        }
      };
  return (
    
      <Button className="dashboardbox" style={{
        backgroundImage:`linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
      }}>
        {
            props.grow ===true &&
            <span className='chart'>{props.cardicon}</span>
        }
        <div className="d-flex w-100 justify-content-between" >
            <div className="col1">
                <h4 className='text-white'>{props.tittle}</h4>
                <span className='text-white' >{props.totaluser}</span>
            </div>
            <div className="ml-auto">
                <span className='icon'>
                {getIcon()}
                </span>
                    
                
            </div>
        </div>
        <div style={{marginTop:"35px"}} className="d-flex w-100 align-item-center justify-content-between ">
            <h4 className='text-white fs-5 mb-0 mt-0'>Last Month</h4>
            <Button className='ml-auto toogleicon'><HiDotsVertical style={{color: "#00000073"}}/></Button>
        </div>
      </Button>
              
              
    
  )
}

export default DashboardBox
