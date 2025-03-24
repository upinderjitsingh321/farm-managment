import React from 'react'
import "./style.css"
import DashboardBox from '../../../../component/admincomponents/dashboard'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AdminPieChart from '../../../../component/Charts/AdminCharts/PieChart/Index';
import IrrigationPieChart from '../../../../component/Charts/AdminCharts/AverageIrrigation';
import PhPieChart from '../../../../component/Charts/AdminCharts/AveragePhChart/Index';
import PracticesPieChart from '../../../../component/Charts/AdminCharts/AveragePractices';


function Dashboard() {

  const data1 = [
    { name: 'Rice', value: 400 },
    { name: 'Wheat', value: 1000 },
    { name: 'Cron', value: 4000 },
    { name: 'Bajra', value: 2000 },
    { name: 'Sugercane', value: 4100 },
    { name: 'Sunflower', value: 1400 },
    { name: 'Musted', value: 2400 },
    { name: 'Groundnut ', value: 4200 },
    { name: 'Oats', value: 3000 },
    { name: 'Coffee', value: 4500 },

  ];
  const data2 = [
    { name: 'Rice', value: 400 },
    { name: 'Wheat', value: 1000 },
    { name: 'Cron', value: 4000 },
    { name: 'Bajra', value: 2000 },
    { name: 'Sugercane', value: 4100 },
    { name: 'Sunflower', value: 1400 },
    { name: 'Musted', value: 2400 },
    { name: 'Groundnut ', value: 4200 },
    { name: 'Oats', value: 3000 },
    { name: 'Coffee', value: 4500 },

  ];
  const data3=[
    {name:"organic",value:40},
    {name:"inorganic",value:60},

  ];
  const data4=[
    {name:"Drip/sprinkler",value:20},
    {name:"Tubewell",value:30},
    {name:"Canal",value:50},

  ]

  return (
    <div>
      <div className="right-content" style={{background:"rgb(225 228 231 / 38%)"}}>
        <div className="row dashboardboxwraperrow">
          <div className="col-md-8 p-0 ps-2">
            <div className="dashboardboxwraper d-flex ">
              <DashboardBox color={["#1da256", "#48d483"]} cardicon={<TrendingUpIcon />} icon={"Profile"} grow={true} totaluser={100} tittle={"Total User"} />
              <DashboardBox color={["#c012e2", "#eb64fe"]} cardicon={<TrendingUpIcon />} icon={"activeprofile"} grow={true} totaluser={70} tittle={"Active User"} />
              <DashboardBox color={["#2c78e5", "#60aff5"]} cardicon={<TrendingDownIcon />} icon={"profile"} grow={true} totaluser={7} tittle={"Pending Reports"} />
              <DashboardBox color={["#e1950e", "#f3cd29"]} cardicon={<TrendingDownIcon />} icon={"activeprofile"} grow={true} totaluser={70} tittle={"Last Month Users"} />
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="">
            <PracticesPieChart data={data3} heading='ORGANIC AND INORGANIC FARM RATIO'/>

            </div>
          </div>
        </div>
        <div className="row ms-0 my-4 gap-3" >
          <div className="col-md-8 bg-white shadow" style={{width:"65%", borderRadius:"10px"}}>
            <div className=' set-mag'>
                 <div className='d-flex justify-content-center' style={{ gap: "6rem" }}>
                <h4 className='mt-5'> Soil Nutrient Deficiency</h4>
                <h4 className='mt-5'> Soil Nutrient Surplus</h4>
              </div>
              <PhPieChart data={data1} data1={data2} />

            </div>
          </div>
          <div className="col-md-4 bg-white shadow cropdata1">
            <IrrigationPieChart data={data1} heading='Average pH Levels in Farmland' />

          </div>
        </div>
        <div className="row ms-0 my-4" style={{ gap: "20px" }}>
          <div className="col-md-4 bg-white shadow cropdata">
            <div className='set-mag'>
              <h4 className='mt-5 text-center '>Crop Growth Analysis</h4>
              <AdminPieChart data={data1} />

            </div>
          </div>
          <div className="col-md-4 bg-white shadow cropdata1">
            <IrrigationPieChart data={data4} heading='Farm Irrigation Statistics' />
          </div>
          {/* <div className="col-md-4 bg-white shadow  cropdata">
            <div className=' set-mag'>             
              <h4 className='mt-5 text-center '>Crop Growth Analysis</h4>
              <AdminPieChart data={data1} />

            </div>

          </div> */}
        </div>
       

      </div>

    </div>




  )
}

export default Dashboard
