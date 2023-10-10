import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute w-full h-full bg-gray-800 opacity-50 modal-overlay"></div>
      <div className="z-50 w-6/12 mx-auto max-h-[90vh] overflow-y-auto box-border p-[30px] bg-white rounded shadow-lg modal-container ss:w-full md:max-w-md ss:overflow-y-auto">
        {children}
      </div>
      <div className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
        <svg
          className="text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          onClick={onClose}
        >
          <path d="M18 1.41L16.59 0 9 7.59 1.41 0 0 1.41 7.59 9 0 16.59 1.41 18 9 10.41 16.59 18 18 16.59 10.41 9 18 1.41z"></path>
        </svg>
        <span className="text-sm">(Esc)</span>
      </div>
    </div>
  );
};

export default Modal;
