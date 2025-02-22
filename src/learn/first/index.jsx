import React, { useState } from "react";
import Modal from "../../lerancomponent/first";


function Apps() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
// const onClose= ()=>{
//     setIsFormOpen(false)
// }
  return (
    <div>
      {/* Button to open Form Modal */}
      <button onClick={() => setIsFormOpen(true)}>Open Form Modal</button>

      {/* Button to open Image Modal */}
      <button onClick={() => setIsImageOpen(true)}>Open Image Modal</button>

      {/* Form Modal */}
      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title="User Form">
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
          <br />
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>

      {/* Image Modal */}
      <Modal isOpen={isImageOpen} onClose={() => setIsImageOpen(false)} title="Image Preview">
        <img
          src="https://via.placeholder.com/300"
          alt="Sample"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      </Modal>
    </div>
  );
}

export default Apps;
