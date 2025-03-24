import React from 'react'
import CropListTable from '../../../component/UserPages/UserCropPage/CropListTable'
import ActivityListTable from '../../../component/UserPages/UserCropPage/ActivityTable'
import InputTable from '../../../component/UserPages/UserCropPage/ChemicalTable'

function UserCropPage() {
 


  return (
    <div className='my-5 vh-100'>
      <div className="row mx-1">
        <div className="col-md-8">
        <CropListTable heading={"Crop List"} Field={"#F01>4"} Acre={"20"} Crop={"Rice"} Variety={"1509"} irrigation={"None"} sowing={"none"} production={"20"} price={"1200"} harvest={"11-5-2025"} planting ={"11-4-2024"} note={"Nothing to write"} />
        </div>
        <div className="col-md-4">
          <ActivityListTable heading={"Activity"} activity={"planting"} rate={"200"} date={"2-2-2025"} user={"pinder"} note={"none"}/>
          <InputTable heading={"Inputs"} inputs={"corazen"}  name ={"50corazenml"} applydate={"5-2-2025"} dosage={"200ml"} rate={"1200"} user={"pinder"} period={"summer"} note={"none"}/>

        </div>
        
      </div>
    </div>
  )
}

export default UserCropPage
