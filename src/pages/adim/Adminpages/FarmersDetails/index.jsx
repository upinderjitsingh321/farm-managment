import React from 'react'
import "./style.css"
import AdminUserFarmTable from '../../../../component/admincomponents/farmerTables/FarmTable'
import AdminCropListTable from '../../../../component/admincomponents/farmerTables/CropsTables'
import AdminSoilTable from '../../../../component/admincomponents/farmerTables/SoilTables'
import AdminChemicaltable from '../../../../component/admincomponents/farmerTables/ChemicalTable'
import AdminUserFieldTable from '../../../../component/admincomponents/farmerTables/FieldsTable'
import AdminNutrient from '../../../../component/admincomponents/farmerTables/NutrientsTable'
import { useParams } from 'react-router'
import FarmerPersonalDetailsTable from '../../../../component/admincomponents/farmerTables/FarmerPersonalDetails'
import { Button } from '@mui/material'


function FarmerDetails() {
    const FarmTable=[{ FarmId:"#01", FarmName:"JattFarm", Type:"Crop", Created:"27-2-2025",  Owner:"Upinderjit Singh", Fields:"4", Acre:"20", Active:"Active"},
        { FarmId:"#01", FarmName:"JattFarm", Type:"Crop", Created:"27-2-2025",  Owner:"Upinderjit Singh", Fields:"4", Acre:"20", Active:"Active"},
        { FarmId:"#01", FarmName:"JattFarm", Type:"Crop", Created:"27-2-2025",  Owner:"Upinderjit Singh", Fields:"4", Acre:"20", Active:"Active"},
        { FarmId:"#01", FarmName:"JattFarm", Type:"Crop", Created:"27-2-2025",  Owner:"Upinderjit Singh", Fields:"4", Acre:"20", Active:"Active"},
        { FarmId:"#01", FarmName:"JattFarm", Type:"Crop", Created:"27-2-2025",  Owner:"Upinderjit Singh", Fields:"4", Acre:"20", Active:"Active"}]

const router= useParams()

  return (
    <div className=''>
      <div className='d-flex justify-content-between me-3'>
      <h4 className='ms-3 mt-2'>{router?.name}</h4>
      <Button className='mt-1' variant="contained" size="small" color="error">
        <span>Suspend</span>
      </Button>
      </div>
      <div className='empty'></div>
      <div className="row mx-1">
        <div className="col-md-12">
        <FarmerPersonalDetailsTable heading={"Personal Details"} data={FarmTable}  />
        </div>
        <div className="col-md-6">
        <AdminUserFarmTable heading={"Farm List"} data={FarmTable}  />
        </div>
        <div className="col-md-6">
        <AdminCropListTable heading={"Crop List"} Field={"#F01>4"} Acre={"20"} Crop={"Rice"} Year={"2025"} Variety={"1509"} irrigation={"None"} sowing={"none"} production={"20"} note={"Nothing to write"}/>

        </div>
        
        <div className="col-md-6">
        <AdminChemicaltable heading={" Chemical"} Field={"#F01>4"} Acre={"20"} Crop={"Rice"} Year={"2025"} Variety={"1509"} irrigation={"None"} sowing={"none"} production={"20"} note={"Nothing to write"}/>

        </div>
        
        <div className="col-md-6">
        <AdminUserFieldTable heading={"Field List"} Field={"4"} Acre={"20"}  Farm={"#01"} Active={"Active"} OwnerShip={"Contract"}/>

        </div>
        <div className="col-md-12">
        <AdminSoilTable  heading={"Soil List"} farm={"#01"} field={"#F01>4"} soiltype={"clay"} issue={"Rice"} organic={"2025"} electricalconductivity={"1509"} soilsaninity={"None"} soiltexture={"none"} phlevel={"20"} />

        </div>
        <div className="col md-12">
        <AdminNutrient heading={"Nutrients List"} Nitrogen={""} Phosphorus={""} Calcium={""} Potassium={""} Sulfur={""} Magnesium={""} Iron={""} Manganese={""} Zinc={""} Copper={""} Chlorine={""} Boron={""}/>
      </div>
      </div>
    </div>
  )
}

export default FarmerDetails

