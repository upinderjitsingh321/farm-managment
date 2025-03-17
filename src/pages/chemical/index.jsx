// import React from 'react'

// function ChemicalPage() {
//   return (
//     <div>
//       <section className='p-5'>
//         <h2>Introduction to Agricultural Chemicals</h2>
//         <p>Agricultural chemicals play a vital role in modern farming by enhancing crop productivity, protecting plants from pests and diseases, and maintaining soil fertility. These chemicals include fertilizers, pesticides, herbicides, fungicides, and growth regulators, each serving a specific function to support healthy plant growth. As the global population continues to rise, the demand for higher agricultural yields has made the responsible use of these chemicals essential for food security and economic stability.
//           However, while agricultural chemicals provide numerous benefits, their misuse can lead to environmental pollution, soil degradation, and health hazards. Sustainable farming practices, such as Integrated Pest Management (IPM) and the use of eco-friendly alternatives, help minimize negative impacts while maximizing efficiency. By applying these chemicals responsibly, farmers can achieve high productivity while ensuring long-term environmental sustainability.</p>
//         <h3>The Importance of Agricultural Chemicals</h3>
//         <p>Agricultural chemicals play a crucial role in modern farming by improving crop productivity, protecting plants from pests and diseases, and enhancing soil fertility. With the growing global population and increasing demand for food, the efficient use of these chemicals is essential to maximize yields while conserving natural resources.As global food demand continues to rise due to population growth, farmers must find ways to increase productivity while conserving resources. Agricultural chemicals allow farmers to optimize crop growth, reduce losses caused by pests and diseases, and maintain soil health. They also help improve efficiency in large-scale farming by reducing labor costs and maximizing land use.</p>
//         <ol>
//           <li>
//             <h5> Enhancing Crop Growth and Soil Fertility</h5>
//             <ul className=''>
//               <li>Fertilizers provide essential nutrients such as nitrogen (N), phosphorus (P), and potassium (K), which promote healthy plant growth.</li>
//               <li>Organic and synthetic fertilizers improve soil structure and nutrient availability, ensuring higher productivity.</li>
//               <li>Balanced fertilization prevents nutrient depletion and maintains soil health for long-term farming.</li>
//             </ul>
//           </li>
//           <li>
//             <h5>Protection Against Pests and Diseases</h5>
//             <ul>
//               <li>Pesticides help control insects, rodents, and nematodes that damage crops.</li>
//               <li>Fungicides prevent and treat fungal infections that can significantly reduce yields.</li>
//               <li>Herbicides eliminate weeds that compete with crops for nutrients, sunlight, and water.</li>
//               <li>Effective pest and disease control ensures better quality crops and reduces post-harvest losses.</li>
//             </ul>
//           </li>
//           <li>
//             <h5>Increasing Agricultural Productivity</h5>
//             <ul>
//               <li>Chemicals allow farmers to produce more food on limited land, supporting global food security.
//               </li>
//               <li>High-yield farming helps meet the food demands of a growing population.
//               </li>
//               <li>Improved plant protection reduces crop losses and enhances the overall efficiency of farming operations.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h5> Reducing Labor and Farming Costs</h5>
//             <ul>
//               <li>Herbicides reduce the need for manual weeding, saving time and labor costs.
//               </li>
//               <li>Chemical-based pest and disease control minimizes crop damage, reducing financial losses.
//               </li>
//               <li>Efficient use of fertilizers and pesticides leads to higher returns on investment for farmers.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h5> Supporting Sustainable Farming Practices</h5>
//             <ul>
//               <li>Controlled and precise application of chemicals helps reduce environmental impact.
//               </li>
//               <li>Advances in agrochemical technology promote eco-friendly solutions such as biodegradable pesticides and organic fertilizers.</li>
//               <li>Integrated Pest Management (IPM) strategies combine chemical, biological, and cultural methods to minimize excessive chemical use.</li>
//             </ul>
//           </li>
//           <li>
//             <h5> Ensuring Food Quality and Availability</h5>
//             <ul>
//               <li>Chemicals improve crop resilience, leading to better quality produce with longer shelf life.
//               </li>
//               <li>Post-harvest treatments help preserve grains, fruits, and vegetables, reducing food waste.
//               </li>
//               <li>Ensuring a stable food supply helps prevent hunger and supports economic growth in agricultural industries.</li>
//             </ul>
//           </li>

//         </ol>
//         <h3>Types of Agricultural Chemicals</h3>
//         <ol>
//           <li><span className='fs-5'>Fertilizers</span> – Supply essential nutrients (such as nitrogen, phosphorus, and potassium) to improve soil fertility and enhance plant growth. These can be organic (manure, compost) or synthetic (chemical fertilizers like urea and ammonium nitrate).</li>
//           <li><span className='fs-5'>Pesticides</span> – Protect crops from harmful insects and pests that can damage plants and reduce yields. Common types include insecticides (for insects), rodenticides (for rodents), and nematicides (for nematodes).</li>
//           <li><span className='fs-5'>Herbicides </span>– Used to control unwanted weeds that compete with crops for water, nutrients, and sunlight. Selective herbicides target specific weeds, while non-selective herbicides eliminate all plant life in a treated area.</li>
//           <li><span className='fs-5'>Fungicides</span> – Help prevent and treat fungal infections that can destroy crops. These chemicals protect plants from diseases like powdery mildew, rust, and blight, which can spread rapidly in humid conditions.</li>
//           <li><span className='fs-5'>Growth Regulators</span> – Influence plant development by promoting or inhibiting growth processes such as flowering, fruiting, and root formation. They are used to improve crop quality and increase harvest efficiency.</li>
//         </ol>
//       </section>
//     </div>

//   )
// }

// export default ChemicalPage
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const sections = [
  {
    title: "Enhancing Crop Growth and Soil Fertility",
    content: [
      "Fertilizers provide essential nutrients such as nitrogen (N), phosphorus (P), and potassium (K), which promote healthy plant growth.",
      "Organic and synthetic fertilizers improve soil structure and nutrient availability, ensuring higher productivity.",
      "Balanced fertilization prevents nutrient depletion and maintains soil health for long-term farming."
    ]
  },
  {
    title: "Protection Against Pests and Diseases",
    content: [
      "Pesticides help control insects, rodents, and nematodes that damage crops.",
      "Fungicides prevent and treat fungal infections that can significantly reduce yields.",
      "Herbicides eliminate weeds that compete with crops for nutrients, sunlight, and water.",
      "Effective pest and disease control ensures better quality crops and reduces post-harvest losses."
    ]
  },
  {
    title: "Increasing Agricultural Productivity",
    content: [
      "Chemicals allow farmers to produce more food on limited land, supporting global food security.",
      "High-yield farming helps meet the food demands of a growing population.",
      "Improved plant protection reduces crop losses and enhances the overall efficiency of farming operations."
    ]
  },{
    title: "Reducing Labor and Farming Costs",
    content: [
      "Herbicides reduce the need for manual weeding, saving time and labor costs.",
      "Chemical-based pest and disease control minimizes crop damage, reducing financial losses.",
"Efficient use of fertilizers and pesticides leads to higher returns on investment for farmers."    ]
  }
];

function ChemicalPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container py-5">
      <section className="card shadow p-4">
        <h2 className="text-success mb-3">Introduction to Agricultural Chemicals</h2>
        <p className="text-muted">
          Agricultural chemicals play a vital role in modern farming by enhancing crop productivity, protecting plants from pests and diseases, and maintaining soil fertility. These chemicals include fertilizers, pesticides, herbicides, fungicides, and growth regulators, each serving a specific function to support healthy plant growth.
        </p>

        <h3 className="text-success mt-4">The Importance of Agricultural Chemicals</h3>

        {sections.map((section, index) => (
          <div key={index} className="mb-3">
            <button
              className="btn btn-success w-100 text-start"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h5 className="mb-0">{section.title}</h5>
            </button>
            {openIndex === index && (
              <ul className="list-group list-group-flush mt-2">
                {section.content.map((point, i) => (
                  <li key={i} className="list-group-item">{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <h3 className="text-success mt-4">Types of Agricultural Chemicals</h3>
        <div className="row mt-3">
          {[
            { name: "Fertilizers", desc: "Supply essential nutrients to improve soil fertility." },
            { name: "Pesticides", desc: "Protect crops from harmful insects and pests." },
            { name: "Herbicides", desc: "Control unwanted weeds that compete with crops." },
            { name: "Fungicides", desc: "Prevent and treat fungal infections in crops." },
            { name: "Growth Regulators", desc: "Influence plant growth and development." }
          ].map((chemical, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card border-success">
                <div className="card-body">
                  <h4 className="card-title text-success">{chemical.name}</h4>
                  <p className="card-text">{chemical.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ChemicalPage;

