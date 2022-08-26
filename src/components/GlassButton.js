import React from "react";
import { GrFormAdd } from "react-icons/gr";

function GlassButton({ text, openModal }) {
  return (
    <button className='btn glass' onClick={openModal}>
      <GrFormAdd size={24} />
      <span className='font-semibold'> {text}</span>
    </button>
  );
}

export default GlassButton;
