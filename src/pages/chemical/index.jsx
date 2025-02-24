import { useState } from "react";
import "./style.css"
import PesticideDashboard from "../../component/admincomponents/pesticide";
const ChemicalPage = () => {
  const [chemicals, setChemicals] = useState([]);
  const [form, setForm] = useState({ name: "", type: "", dosage: "", activeIngredient: "", applicationDate: "", expiryDate: "", manufacturer: "", cropType: "" });

  const addChemical = (e) => {
    e.preventDefault()
    setChemicals([...chemicals, form]);
    setForm({ name: "", type: "", dosage: "", activeIngredient: "", applicationDate: "", expiryDate: "", manufacturer: "", cropType: "" });
  };


  return (

    <div className="">
      <div className="chemical_background">
        <p className="text-white pt-5 mb-0 fs-3 text-center lh-lg chemicaltext">"Chemical fertilizers give immediate results,</p> <p className="text-white mb-0 fs-3 text-center chemicaltext">but long-term sustainability comes from balanced soil care."</p>
      </div>

      <div className="container-chemical">

        <section>
          <div className="boxborder shadow">
            <h2 className="fs-2">Chemical Usage Guidelines</h2>
            <ul className="">
              <li><strong >Read Labels Carefully:</strong> Always read and follow manufacturer instructions to ensure safe and effective application.</li>
              <li><strong >Wear Protective Equipment:</strong> Use gloves, masks, and protective clothing to prevent exposure to harmful substances.</li>
              <li><strong >Apply in Suitable Weather:</strong> Avoid spraying chemicals on windy or rainy days to prevent drift and unintended contamination.</li>
              <li><strong >Follow Recommended Dosage:</strong> Overuse can lead to resistance in pests and environmental damage.</li>
              <li><strong >Dispose of Containers Properly:</strong> Follow local waste management guidelines for disposal to prevent pollution.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="boxborder mt-4 shadow">
            <h2 className="">Chemical Safety Information</h2>
            <ul className=" ">
              <li><strong>Personal Protection:</strong> Always wear gloves, safety goggles, and long-sleeved clothing while handling chemicals.</li>
              <li><strong>First Aid Measures:</strong> In case of accidental exposure, wash the affected area immediately with water and seek medical attention if necessary.</li>
              <li><strong>Storage Guidelines:</strong> Store chemicals in cool, dry areas away from food, livestock, and water sources.</li>
              <li><strong>Handling Procedures:</strong> Never mix chemicals unless approved, and avoid direct contact with skin and eyes.</li>
              <li><strong>Emergency Contact:</strong> Keep emergency contact numbers available for poison control and medical services.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="boxborder mt-4 shadow">
            <h2 className="">Regulatory Compliance & Legal Guidelines</h2>
            <p className="">Farmers must comply with national and local regulations regarding chemical usage. This includes:</p>
            <ul className="">
              <li>Ensuring all chemicals used are approved by local agricultural authorities.</li>
              <li>Maintaining accurate records of chemical purchases, applications, and disposal.</li>
              <li>Obtaining proper licenses for handling and applying restricted chemicals.</li>
              <li>Following all environmental protection laws to prevent contamination.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="boxborder mt-4 shadow">
            <h2 className="">Recommendations & Alternatives</h2>
            <p className="">To reduce dependency on synthetic chemicals, consider the following alternatives:</p>
            <ul className=" ">
              <li>Utilizing crop rotation to naturally manage pests and soil nutrients.</li>
              <li>Adopting integrated pest management (IPM) strategies to minimize chemical use.</li>
              <li>Using organic pesticides derived from plant-based sources.</li>
              <li>Implementing biological controls such as beneficial insects to manage pest populations.</li>
              <li>Exploring eco-friendly fertilizers and compost to maintain soil health.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="boxborder mt-4 shadow">
            <h2 className="">Frequently Asked Questions (FAQ)</h2>
            <ul className="">
              <li><strong>What is the safest way to apply chemicals?</strong> Always follow manufacturer guidelines, wear protective equipment, and apply during appropriate weather conditions.</li>
              <li><strong>Can I mix different chemicals?</strong> Only if explicitly stated as safe on the product label. Mixing incompatible chemicals can be dangerous.</li>
              <li><strong>How do I dispose of chemical containers?</strong> Rinse thoroughly, puncture, and follow local hazardous waste disposal regulations.</li>
              <li><strong>Are there eco-friendly alternatives?</strong> Yes, consider organic pesticides, crop rotation, and integrated pest management techniques.</li>
              <li><strong>How often should I apply pesticides?</strong> Follow label instructions and avoid excessive application to prevent resistance and environmental harm.</li>
            </ul>
          </div>
        </section>

        <section className="container mt-5 p-4">


          <form onSubmit={addChemical} className="registration_form shadow p-4 bg-white rounded reg-padding">
            <h2 className="text-center mb-4 text-dark heading-list">Fill Chemical Details</h2>

            <div className="row mb-3">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Feild No.</label>
                  <input className="form-control" type="text" placeholder="#01" value={form.dosage} onChange={(e) => setForm({ ...form, dosage: e.target.value })} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Area(Acre)</label>
                  <input className="form-control" type="text" placeholder="2" value={form.activeIngredient} onChange={(e) => setForm({ ...form, activeIngredient: e.target.value })} />

                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Crop Type</label>
                <input className="form-control" type="text" placeholder="Crop Type" value={form.cropType} onChange={(e) => setForm({ ...form, cropType: e.target.value })} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Type</label>
                <select className="form-control" placeholder="Type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} >
                  <option value="">Select Type </option>
                  <option value="dry">Pesticide</option>
                  <option value="moist">Fertilizer</option>
                  <option value="wet">Fungicide</option>
                  <option value="wet">Manure</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Product Name</label>
                <input className="form-control" type="text" placeholder="Product Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Active Ingredient</label>
                <input className="form-control" type="text" placeholder="Active Ingredient" value={form.activeIngredient} onChange={(e) => setForm({ ...form, activeIngredient: e.target.value })} />

              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Manufacturer</label>
                <input className="form-control" type="text" placeholder="Manufacturer" value={form.manufacturer} onChange={(e) => setForm({ ...form, manufacturer: e.target.value })} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Dosage per Acre</label>
                <input className="form-control" type="text" placeholder="Dosage" value={form.dosage} onChange={(e) => setForm({ ...form, dosage: e.target.value })} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Application Date</label>
                <input className="form-control" type="date" value={form.applicationDate} onChange={(e) => setForm({ ...form, applicationDate: e.target.value })} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Expiry Date</label>
                <input className="form-control" type="date" value={form.expiryDate} onChange={(e) => setForm({ ...form, expiryDate: e.target.value })} />
              </div>
            </div>

            <div className="comman_div_button text-center">
              <button type="submit" className="btn btn-success px-4 py-2 rounded-pill">Add Chemical</button>
            </div>
          </form>


        </section>
        <PesticideDashboard />
      </div>

    </div>

  );
}
export default ChemicalPage;
