import React from "react";

function CircleAvatar() {
  return (
    <div className='flex items-center space-x-3 '>
      <a href='https://www.bicksoning.in' target='_blank' rel='noreferrer'>
        <img
          className='h-16 w-16 rounded-full'
          src='https://www.bicksoning.in/images/profilepic.jpg'
          alt='profile_pic'
        />
      </a>

      <h3 className='text-xl font-semibold'>Bickson Ning</h3>
    </div>
  );
}

export default CircleAvatar;
