import React from 'react'
import "./style.css"

import CropDashboardTable from '../../../component/UserPages/UserDashboard/CropTable';
import FieldDashboardTable from '../../../component/UserPages/UserDashboard/FieldTable';
import CustomPieChart from '../../../component/Charts/UserCharts/PieCharts';
import SoilDashboardTable from '../../../component/UserPages/UserDashboard/SoilTable';
function UserFarm() {

  const data1 = [
    { name: 'Wheat', value: 400 },
    { name: ' Rice', value: 300 },
    { name: 'MazeC', value: 300 },
    { name: 'Sugercane', value: 200 },
  ];

  const data2 = [
    { name: 'Category X', value: 500 },
    { name: 'Category Y', value: 250 },
    { name: 'Category Z', value: 150 },
  ];
  const data3 = [
    { name: ' Harvest Exp.', value: 5000 },
    { name: 'Sowing Exp.', value: 2500 },
    { name: 'Labour Exp.', value: 4500 },
    { name: 'Fertilizer Exp.', value: 700 },
  ];

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='container'>
      <div className="row mt-2 gap-5">
        <div className="col-md-12 ">
          <div className='detail-card d-flex mb-5'>
            <FieldDashboardTable heading={["Feild[2025]"]} field={["#01"]} acre={["5"]} crops={["Rice"]} variety={["none%"]} link={["Go to Feild List"]} />
            <CropDashboardTable heading={["Crop[2025]"]} cropname={["Rice"]} acre={["3"]} production={["300kg"]} rate={["2160"]} link={["Go to Crop List"]} />
            <SoilDashboardTable heading={["Soil Detail[2025]"]} field={["#01"]} type={["clay"]} issue={["low fertility"]} organic={["low"]} link={["Go to Soil List"]} />
          </div>

          <div className="container">

          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-0 mb-4">
                <CustomPieChart data={data1} colors='#FF8042' heading="Summary of crops" tittle="crop" link="/croprotationpage"/>
              </div>
              <div className="col-md-4 ">
                <CustomPieChart data={data2}  heading="Summary of Chemical[2025]" tittle="chemical" link="/soilpage" />
              </div>
              <div className="col-md-4 position-relative ">
                <CustomPieChart data={data3}  heading="Cost[2025]" tittle="profit" link="/production" />


              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default UserFarm
