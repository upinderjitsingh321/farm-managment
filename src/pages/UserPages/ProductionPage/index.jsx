import React from 'react'
import UserProduction from '../../../component/UserPages/UserProductionPage'
import UserExpenseTable from '../../../component/UserPages/UserProductionPage/CropCost'

function UserProductionPage() {
 const FarmTable=[{ FarmId:"#01", FarmName:"JattFarm", Type:"Crop", Created:"27-2-2025",  Owner:"Upinderjit Singh", Fields:"4", Acre:"20", Active:"Active"},
  { FarmId:"#01", FarmName:"JattFarm", Type:"Crop", Created:"27-2-2025",  Owner:"Upinderjit Singh", Fields:"4", Acre:"20", Active:"Active"}
 ]


  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <UserProduction/>
        </div>
        <div className="col-md-12">
          <UserExpenseTable/>
        </div>

       

      </div>
    </div>
  )
}

export default UserProductionPage
