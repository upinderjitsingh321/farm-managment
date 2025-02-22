import React from 'react'
import "./style.css"
import DashboardBox from '../../../../component/admincomponents/dashboard'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

function Dashboard() {
  return (
    <div>
      <div className="right-content">
        <div className="row dashboardboxwraperrow">
          <div className="col-md-8">
            <div className="dashboardboxwraper d-flex ">
              <DashboardBox color={["#1da256","#48d483"]} cardicon={<TrendingUpIcon />} icon={"Profile"} grow={true} totaluser={100} tittle={"Total User"}/>
              <DashboardBox color={["#c012e2","#eb64fe"]} cardicon={<TrendingUpIcon />} icon={"activeprofile"} grow={true} totaluser={70}  tittle={"Active User"}/>
              <DashboardBox color={["#2c78e5","#60aff5"]} cardicon={<TrendingDownIcon />} icon={"profile"} grow={true} totaluser={7}  tittle={"Pending Reports"}/>
              <DashboardBox color={["#e1950e","#f3cd29"]} cardicon={<TrendingDownIcon />} icon={"activeprofile"}  grow={true} totaluser={7}  tittle={"Pending Reports"}s  />
            </div>
          </div>
          <div className="col-md-4">
            <div className="box"></div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard
