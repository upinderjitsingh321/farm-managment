import React from 'react'
import UserFarmTable from '../../../component/UserPages/UserFieldPage/FarmTable'
import UserFieldTable from '../../../component/UserPages/UserFieldPage/FieldTable'
import UserCropTable from '../../../component/UserPages/UserFieldPage/CropTable'
import SoilDashboardTable from '../../../component/UserPages/UserDashboard/SoilTable'

function UserField() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
            <UserFarmTable heading={["Farm List"]} FarmId={["#01"]} FarmName={["JattFarm"]} Type={["Crop"]} Created={["27-2-2025"]}  Owner={["Upinderjit Singh"]} Fields={["4"]} Acre={["20"]} Active={["Active"]} />
        </div>

        <div className="col-md-4">
        <UserFieldTable heading={["Feild List"]} Field={["4"]} Acre={["20"]}  Farm={["#01"]} Active={["Active"]} OwnerShip={["Contract"]} />
        </div>
        <div className="col-md-4">
        <UserCropTable heading={["Crop List"]} Field={["#F01>4"]} Acre={["20"]} Crop={["Rice    "]} Year={["2025"]} Variety={["1509"]} />
        </div>
        <div className="col-md-4">
        <SoilDashboardTable heading={["Soil Detail[2025]"]} field={["#01"]} type={["clay"]} issue={["low fertility"]} organic={["low"]} link={["Go to Soil List"]} />
        </div>

      </div>
    </div>
  )
}

export default UserField
