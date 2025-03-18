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
  }, {
    title: "Reducing Labor and Farming Costs",
    content: [
      "Herbicides reduce the need for manual weeding, saving time and labor costs.",
      "Chemical-based pest and disease control minimizes crop damage, reducing financial losses.",
      "Efficient use of fertilizers and pesticides leads to higher returns on investment for farmers."]
  },
  {
    title: "Supporting Sustainable Farming Practices",
    content: [
      "  Controlled and precise application of chemicals helps reduce environmental impact.",
      "Advances in agrochemical technology promote eco-friendly solutions such as biodegradable pesticides and organic fertilizers.",
      "Integrated Pest Management (IPM) strategies combine chemical, biological, and cultural methods to minimize excessive chemical use."

    ]
  },
  {
    title: "Ensuring Food Quality and Availability",
    content: ["Chemicals improve crop resilience, leading to better quality produce with longer shelf life.",
      "Post-harvest treatments help preserve grains, fruits, and vegetables, reducing food waste.",
      "Ensuring a stable food supply helps prevent hunger and supports economic growth in agricultural industries."
    ]
  }

];

function ChemicalPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container py-5">
      <section className="card shadow p-4">
        <h2 className="text-success mb-3">Introduction to Agricultural Chemicals</h2>
        <p className="text-muted">
          Agricultural chemicals, commonly known as agrochemicals, are substances used to enhance crop production by improving soil fertility, protecting plants from pests and diseases, and increasing overall agricultural efficiency. These chemicals include fertilizers, pesticides, herbicides, fungicides, and plant growth regulators, each serving a specific role in ensuring healthy plant development. By supplying essential nutrients, controlling harmful organisms, and preventing weed competition, agricultural chemicals help farmers achieve higher yields and maintain a steady food supply for a growing global population.
          <br></br>The use of agricultural chemicals has revolutionized modern farming, enabling large-scale food production to meet the demands of urbanization and population growth. When applied correctly, they contribute to sustainable farming by preventing crop losses, reducing labor costs, and improving the quality and longevity of harvested produce. However, responsible usage and proper management are crucial to minimizing environmental risks and ensuring that these chemicals support long-term agricultural sustainability.
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
            { name: "Fertilizers", desc: "Fertilizers are substances used to enhance soil fertility and promote plant growth by providing essential nutrients like nitrogen, phosphorus, and potassium. They can be organic, derived from natural sources like compost and manure, or inorganic, made from synthetic chemicals for quicker nutrient absorption. Proper use of fertilizers improves crop yield, strengthens plant resistance, and maintains soil health, ensuring sustainable farming practices." },
            { name: "Pesticides", desc: "Pesticides are substances used to protect crops from pests, diseases, and weeds, ensuring better yield and quality. They can be chemical-based or organic, targeting insects, fungi, or unwanted plants. Proper pesticide use helps prevent crop damage, reduces losses, and improves food production efficiency while requiring careful handling to minimize environmental and health risks." },
            { name: "Herbicides", desc: "Herbicides are chemicals used to control or eliminate unwanted weeds that compete with crops for nutrients, water, and sunlight. They can be selective, targeting specific weed species, or non-selective, affecting all plants they come into contact with. Proper use of herbicides helps improve crop yield, reduce manual labor, and maintain soil health, but they must be applied carefully to avoid harming beneficial plants and the environment." },
            { name: "Fungicides", desc: "Fungicides are chemicals or biological agents used to prevent, control, or eliminate fungal diseases that affect crops. They help protect plants from infections like rust, mildew, and blight, which can reduce yield and quality. Fungicides can be contact-based, forming a protective barrier on plant surfaces, or systemic, being absorbed and distributed within the plant. Proper application ensures healthy crop growth while minimizing environmental impact." },
            { name: "Growth Regulators", desc: "Growth regulators are chemical substances that influence plant growth and development by modifying processes like flowering, fruiting, root formation, and stem elongation. They include plant hormones such as auxins, gibberellins, and cytokinins, which can stimulate or inhibit growth depending on the desired effect. Proper use of growth regulators helps improve crop yield, enhance quality, and manage plant growth for better agricultural productivity." }
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

