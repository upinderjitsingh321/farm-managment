import React from 'react'
import SoilTable from '../../../component/UserPages/SoilPage/SoilTable'
import Nutrient from '../../../component/UserPages/SoilPage/NutrientTable'
import Chemicaltable from '../../../component/UserPages/SoilPage/ChemicalTable'


function UserSoilPage() {



  return (
    <div className=''>
      <div className="row mx-3 my-4">
        <div className="col-md-12 my-5">

          <SoilTable heading={"Soil List"} farm={"#01"} field={"#F01>4"} soiltype={"clay"} issue={"Rice"} organic={"2025"} electricalconductivity={"1509"} soilsaninity={"None"} soiltexture={"none"} phlevel={"20"} />
        </div>

        <div className="col-md-12 my-5">
          <Nutrient heading={"Nutrient List"} Nitrogen={""} Phosphorus={""} Calcium={""} Potassium={""} Sulfur={""} Magnesium={""} Iron={""} Manganese={""} Zinc={""} Copper={""} Chlorine={""} Boron={""} />
        </div>
        {/* <div className="col-md-12 my-5">
          <Chemicaltable heading={" Chemical"} farm={"#01"} Field={"#F01>4"} product={""} activeingredient={"Rice"} manufacture={"2025"} dosage={"1509"} applydate={""}  price={"Nothing to write"} />
        </div> */}
      </div>
    </div>
  )
}


export default UserSoilPage
