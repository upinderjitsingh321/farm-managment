import React from 'react'
import UserFarmTable from '../../../component/UserPages/UserFieldPage/FarmTable'
import UserFieldTable from '../../../component/UserPages/UserFieldPage/FieldTable'
import UserCropTable from '../../../component/UserPages/UserFieldPage/CropTable'
import UserSoilTable from '../../../component/UserPages/UserFieldPage/SoilTable'

function UserField() {
 const FarmTable=[{ FarmId:"#01", FarmName:"JattFarm", Type:"Crop", Created:"27-2-2025",  Owner:"Upinderjit Singh", Fields:"4", Acre:"20", Active:"Active"},
  { FarmId:"#01", FarmName:"JattFarm", Type:"Crop", Created:"27-2-2025",  Owner:"Upinderjit Singh", Fields:"4", Acre:"20", Active:"Active"}
 ]


  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
            <UserFarmTable heading={"Farm List"} data={FarmTable}  />
        </div>

        <div className="col-md-4">
        <UserFieldTable heading={"Field List"} Field={"4"} Acre={"20"}  Farm={"#01"} Active={"Active"} OwnerShip={"Contract"} />
        </div>
        <div className="col-md-4">
        <UserCropTable heading={"Crop List"} Field={"#F01>4"} Acre={"20"} Crop={"Rice"} Year={"2025"} Variety={"1509"} />
        </div>
        <div className="col-md-4">
        <UserSoilTable heading={"Soil Detail[2025]"} field={"#01"} type={"clay"} issue={"low fertility"} organic={"low"} link={"Go to Soil List"} />
        </div>

      </div>
    </div>
  )
}

export default UserField
