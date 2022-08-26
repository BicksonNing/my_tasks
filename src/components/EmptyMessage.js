// react
import React from "react";

// images
import emptyPic from "../assets/empty.svg";
import GlassButton from "./GlassButton";

function EmptyMessage({ openModal }) {
  return (
    <div className='glass rounded-lg px-16 py-5 space-y-5 lg:space-y-0 md:flex items-center md:justify-between'>
      <div className='flex space-y-3 md:space-y-0 items-center space-x-4 justify-center'>
        <img src={emptyPic} alt='empty_pic' className='h-28' />
        <h3 className='text-xl font-semibold'>No task found</h3>
      </div>
      <div className='flex justify-center'>
        <GlassButton text='Add Now' openModal={openModal} />
      </div>
    </div>
  );
}

export default EmptyMessage;
