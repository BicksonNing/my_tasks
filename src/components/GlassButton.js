import React from "react";
import { GrFormAdd } from "react-icons/gr";

function GlassButton({ openModal }) {
  return (
    <button className='btn glass' onClick={openModal}>
      <GrFormAdd size={24} />
      <span className='font-semibold'>Add Task</span>
    </button>
  );
}

export default GlassButton;
