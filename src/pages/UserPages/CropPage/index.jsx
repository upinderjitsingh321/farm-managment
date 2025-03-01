import React from 'react'
import CropListTable from '../../../component/UserPages/UserCropPage/CropListTable'
import ActivityListTable from '../../../component/UserPages/UserCropPage/ActivityTable'
import ChemicalListTable from '../../../component/UserPages/UserCropPage/ChemicalTable'

function UserCropPage() {
 


  return (
    <div className=''>
      <div className="row mx-1">
        <div className="col-md-8">
        <CropListTable heading={"Crop List"} Field={"#F01>4"} Acre={"20"} Crop={"Rice"} Year={"2025"} Variety={"1509"} irrigation={"None"} snowing={"none"} production={"20"} note={"Nothing to write"} />
        </div>
        <div className="col-md-4">
          <ActivityListTable heading={"Activity"} activity={"planting"} rate={"200"} date={"2-2-2025"} user={"pinder"} note={"none"}/>
          <ChemicalListTable heading={"Chemical"} product={"corazen"}  dosage ={"50ml"} applydate={"5-2-2025"} note={"none"}/>

        </div>
        
      </div>
    </div>
  )
}

export default UserCropPage
