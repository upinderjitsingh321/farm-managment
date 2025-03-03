import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';



function ModelNutrientForm() {
  const [show, setShow] = useState(false);

 const [feildno, setFeildNo] = useState("") 
   const [area, setArea] = useState("") 
   const [n, setN] = useState("") 
   const [p, setP] = useState("") 
   const [k, setK] = useState("") 
   const [so4, setSO4] = useState("") 
   const [cl, setCL] = useState("") 
   const [cu, setCU] = useState("") 
   const [b, setB] = useState("") 
   const [ca, setCA] = useState("") 
   const [mg, setMG] = useState("") 
   const [fe, setFE] = useState("") 
   const [zn, setZN] = useState("") 
   const [mn, setMN] = useState("") 
   
     
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(feildno,area,soillocation,soiltype,soilcondition,soillevel,issuesfaced,soilmoisture,moistureunit,soiltexture,electricalconductivity,organiclevel,soilsalinity,n,p,k,so4,cu,b,mg,zn,cl,ca,fe,mn)
  
  }
  return (
    <>
      <button className='add-button' onClick={() => setShow(true)}>
       <AddCircleIcon/> Add Nutrient Detail
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size='lg'
        
      >
        <Modal.Header  style={{backgroundColor:"rgb(108, 146, 108)",padding:"0px 10px",color:"white",display:"flex",justifyContent:"space-between"}}>
          <Modal.Title id="example-custom-modal-styling-title">
            Soil Detail 
          </Modal.Title>
          <CloseIcon className='text-danger'/>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleSubmit} className="registration_form shadow p-4 bg-white rounded reg-padding">
        <div className="row mb-3">
                        <div className="col-md-6">
                            <label for="farmer_name" className="form-label">Feild NO.</label>
                            <input type="text" className="form-control" id="farmer_name"  onChange={(e) => setFeildNo(e.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label for="contact" className="form-label">Area(Acre)</label>
                            <input type="email" className="form-control" id="contact"  onChange={(e) => setArea(e.target.value)} />
                        </div>
                    </div>
                   <div className="row mb-3">
                        <div className="col-md-12">
                            <label className="form-label" for="nutrientanalysis">Nutrient Analysis</label>
                        </div>
                        <div className="row nutrient_border">
                            <div className="col-md-2 nutrient_padding"><label>N</label><input className="input_size_nutrient" type="number"
                                min="0" step="0.01" placeholder="" onChange={(e) => setN(e.target.value)} /></div>
                            <div className="col-md-2 nutrient_padding"><label>P</label><input className="input_size_nutrient" type="number"
                                min="0" step="0.01" placeholder="" onChange={(e) => setP(e.target.value)} /></div>
                            <div className="col-md-2 nutrient_padding"><label>K</label><input className="input_size_nutrient" type="number"
                                min="0" step="0.01" placeholder="" onChange={(e) => setK(e.target.value)} /></div>
                            <div className="col-md-2 nutrient_padding"><label>SO<sub>4</sub></label><input className="input_size_nutrient"
                                type="number" min="0" step="0.01" placeholder=""  onChange={(e) => setSO4(e.target.value)}/></div>
                            <div className="col-md-2 nutrient_padding"><label>Cl</label><input className="input_size_nutrient" type="number"
                                min="0" step="0.01" placeholder=""  onChange={(e) => setCL(e.target.value)}/>
                            </div>
                            <div className="col-md-2 nutrient_padding"><label>Cu</label><input className="input_size_nutrient" style={{width:"100px"}} type="number"
                                min="0" step="0.01" placeholder="" onChange={(e) => setCU(e.target.value)} />
                            </div>
                            <div className="col-md-2 nutrient_padding"><label>B</label><input className="input_size_nutrient" type="number"
                                min="0" step="0.01" placeholder="" onChange={(e) => setB(e.target.value)} /></div>
                            <div className="col-md-2 nutrient_padding"><label>Ca</label><input className="input_size_nutrient" type="number"
                                min="0" step="0.01" placeholder="" onChange={(e) => setCA(e.target.value)} />
                            </div>
                            <div className="col-md-2 nutrient_padding"><label>Mg</label><input className="input_size_nutrient" type="number"
                                min="0" step="0.01" placeholder=""  onChange={(e) => setMG(e.target.value)}/>
                            </div>
                            <div className="col-md-2 nutrient_padding"><label>Fe</label><input className="input_size_nutrient" type="number"
                                min="0" step="0.01" placeholder=""  onChange={(e) => setFE(e.target.value)}/>
                            </div>
                            <div className="col-md-2 nutrient_padding"><label>Zn</label><input className="input_size_nutrient" type="number"
                                min="0" step="0.01" placeholder=""  onChange={(e) => setZN(e.target.value)}/>
                            </div>
                            <div className="col-md-2 nutrient_padding"><label>Mn</label><input className="input_size_nutrient" style={{width:"100px"}} type="number"
                                min="0" step="0.01" placeholder="" onChange={(e) => setMN(e.target.value)} />
                            </div>
                        </div>

                    </div>


                    <div className="comman_div_button text-center">
                    <button type="submit" className="btn px-4 py-2 text-white" style={{backgroundColor:"rgb(108, 146, 108)"}}>Save</button>

                    </div>
                </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelNutrientForm;