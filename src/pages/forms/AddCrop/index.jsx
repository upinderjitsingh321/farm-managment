import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function AddCrop() {
   
    const [cropname, setCropName] = useState("")
    const [fieldno, setFieldNo] = useState("")
    const [variety, setVariety] = useState("")
    const [seasonyear, setSeasonYear] = useState("")
    const [season, setSeason] = useState("")
    const [farmarea, setFarmArea] = useState("")
    const [production, setProduction] = useState("")
    const [irrigationMethod, setIrrigationMethod] = useState("");
    const [harvestDate, setHarvestDate] = useState("");
    const [snowingDate, setSnowingDate] = useState("");
    const [snowingmethod, setSnowingMethod] = useState("");
    const [snowingexpense, setSnowingExpense] = useState("");
    const [harvestexpense, setHarvestExpense] = useState("");
    const [labourcost, setLabourCost] = useState("");
    const [remark, setRemark] = useState("")
    console.log(fieldno, cropname, variety, seasonyear, season, farmarea, production, remark, snowingDate, snowingmethod, harvestDate,harvestexpense,labourcost,snowingexpense, irrigationMethod)
    return (
        <>
            <section className="container mt-5 p-4 ">
                <form className=" shadow p-4 bg-white rounded farm-padding">
                    <h2 className="text-center mb-4 text-dark">Add Crop Detail</h2>

                    <div class="row mb-3">

                        <div class="col-md-6">
                            <label for="feild_no" class="form-label">Field No.</label>
                            <input type="type" class="form-control" id="feild_no" placeholder='#01' onChange={(e) => setFieldNo(e.target.value)} />
                        </div>
                        <div class="col-md-6">
                            <label for="farm_area" class="form-label">Farm Area in(Ha.)</label>
                            <input type="type" class="form-control" id="farm_area" placeholder="0" onChange={(e) => setFarmArea(e.target.value)} />
                        </div>


                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Season Year</label>
                            <select type="text" className="form-control" placeholder="2024-2025" onChange={(e) => setSeasonYear(e.target.value)} >
                                <option selected>2024-2025</option>
                                <option value="2024-2025">2024-2025</option>
                                <option value="2023-2024">2023-2024</option>
                                <option value="2022-2023">2022-2023</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="crop_name" class="form-label">Crop Name</label>
                            <input type="type" class="form-control" id="crop_name" onChange={(e) => setCropName(e.target.value)} />
                        </div>

                    </div>
                    <div class="row mb-3">

                        <div class="col-md-6">
                            <label for="select_season" class="form-label common_select">Season</label>
                            <select class="form-select " onChange={(e) => setSeason(e.target.value)}>
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="select_variety" class="form-label">Variety</label>
                            <select class="form-select " onChange={(e) => setVariety(e.target.value)}>
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>
                    <div class="row mb-3">

                        <div className="col-md-6">
                            <label className="form-label">Snowing Method</label>
                            <select className="form-select" onChange={(e) => setSnowingMethod(e.target.value)}>
                                <option>Select</option>
                                <option value="BroadCasting">BroadCasting</option>
                                <option value="NO Til Drill">NO Til Drill</option>
                                <option value="Happy Seeder">Happy Seeder</option>
                                <option value="Super Seeder">Super Seeder</option>
                                <option value="Surface Seeder">Surface Seeder</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Crop Rotation</label>
                            <input type="text" className="form-control" placeholder="Previous crops grown" onChange={(e) => setCropRotation(e.target.value)} />
                        </div>
                    </div>


                    <div class="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label"> Snowing Expense</label>
                            <input type="date" className="form-control" onChange={(e) => setSnowingExpense(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"> Harvest Expense</label>
                            <input type="date" className="form-control" onChange={(e) => setHarvestExpense(e.target.value)} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Expected Snowing Date</label>
                            <input type="date" className="form-control" onChange={(e) => setSnowingDate(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Expected Harvest Date</label>
                            <input type="date" className="form-control" onChange={(e) => setHarvestDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div class="col-md-6">
                            <label for="labourcost" class="form-label">Labour Cost</label>
                            <input type="type" class="form-control" id="labourcost" onChange={(e) => setLabourCost(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Irrigation Method</label>
                            <select className="form-select" onChange={(e) => setIrrigationMethod(e.target.value)}>
                                <option>Select</option>
                                <option value="Drip">Drip/Sprinkler</option>
                                <option value="Sprinkler">Tubewell</option>
                                <option value="Flood">Canal</option>
                            </select>
                        </div>

                    </div>
                    <div className="row md-3">
                    <div class="col-md-6">
                            <label for="production" class="form-label">Expected Production</label>
                            <input type="type" class="form-control" id="production" onChange={(e) => setProduction(e.target.value)} />
                        </div>
                        <div class="col-md-6">
                            <label for="remarks" class="form-label">Remarks</label>
                            <input type="type" class="form-control" id="remarks" onChange={(e) => setRemark(e.target.value)} />
                        </div>
                    </div>



                    <div className="comman_div_button text-center mt-3">
                        <button type="submit" className="btn btn-success px-4 py-2 rounded-pill">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddCrop
