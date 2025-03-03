import React from 'react'
import SoilTable from '../../../component/UserPages/SoilPage/SoilTable'
import Nutrient from '../../../component/UserPages/SoilPage/NutrientTable'
import Chemicaltable from '../../../component/UserPages/SoilPage/ChemicalTable'


function UserSoilPage() {
 


  return (
    <div className=''>
      <div className="row mx-1">
        <div className="col-md-8 mt-3">
          
        <SoilTable heading={"Soil List"} farm={"#01"} field={"#F01>4"} soiltype={"clay"} issue={"Rice"} organic={"2025"} electricalconductivity={"1509"} soilsaninity={"None"} soiltexture={"none"} phlevel={"20"}  />
        </div>
        
        <div className="col-md-4">
        <Chemicaltable heading={" Chemical"} Field={"#F01>4"} Acre={"20"} Crop={"Rice"} Year={"2025"} Variety={"1509"} irrigation={"None"} snowing={"none"} production={"20"} note={"Nothing to write"} />
        </div>

                <div className="col-md-12 mt-3">
        <Nutrient heading={"Nutrient List"} Nitrogen={""} Phosphorus={""} Calcium={""} Potassium={""} Sulfur={""} Magnesium={""} Iron={""} Manganese={""} Zinc={""} Copper={""} Chlorine={""} Boron={""}/>
        </div>
        
      </div>
    </div>
  )
}


export default UserSoilPage
