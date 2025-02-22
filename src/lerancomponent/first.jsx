import React from "react";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <div className="modal-body">{children}</div>
        <button onClick={onClose}>Close</button>
      </div>

      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .modal-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            min-width: 300px;
            max-width: 90%;
            text-align: center;
            position: relative;
          }
          .modal-body {
            margin: 15px 0;
          }
        `}
      </style>
    </div>
  );
}

export default Modal;
