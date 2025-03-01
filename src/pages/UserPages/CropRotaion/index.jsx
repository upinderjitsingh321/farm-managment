import React from 'react'
import CropRotationTable from '../../../component/UserPages/UserCropRotation/CropRotationTable';
import CropAreaTable from '../../../component/UserPages/UserCropRotation/CropAreaTable';
import CustomAreaPieChart from '../../../component/Charts/UserCharts/SeededAreaChart';

function UserCropRotationPage() {

  const data1 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];


  return (
    <div className=''>
      <div className="row mx-1">
        <div className="col-md-12">
          <CropRotationTable heading={" Crop Rotation History"} tittle={"add"} fields={"#F01>4"} acre={"20"} year1={""} year2={""} year3={""} year4={""} year5={""}/>
        </div>
        <div className="col-md-7">
          <CropAreaTable heading={"Seeded Land Over Past 4 Years"} crops={"flax"} production={"100"} year1={""} year2={""} year3={""} year4={""} year5={""}/>
         </div>
         <div className="col-md-5 mt-3"> <CustomAreaPieChart data={data1} colors='#FF8042' heading="Summary Cultivated area" tittle="crop" />
        </div>

      </div>
    </div>
  )
}

export default UserCropRotationPage
