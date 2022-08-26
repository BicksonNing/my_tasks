// react
import React from "react";

// icons
import { BsCheckAll } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiTwotoneAlert } from "react-icons/ai";

const outlines = [
  "Build this project using React",
  'The page "My Tasks" should have 4 tiles with the corresponding data as given in the wireframe',
  'When the user clicks on the "Add task" button, a pop up modal should show a form for adding a new task',
  "User should be able to enter task name, description, date and a dropdown to select status (Pending, Completed and On hold)",
  'Below the "Add task" button, there should be a table showing the list of tasks added',
  "The above table to show a maximum of 10 tasks on page load, sorted in descending order by date",
  "When user clicks the edit icon, the same modal should be shown which can be used to edit the task details",
  "Use Firestore/Realtime database for data storage",
  "The tasks list table should be updated real time whenever a new task gets added or updated",
  'The "About" page is just a page whose content is as given in this wireframe. Page should not refresh while navigating to this page',
  "Add your own colors to the pages. Make the design & color as modern as you can",
  'Bonus (optional): Add infinite scroll/loader feature to the "Tasks list" table',
  "Setup a public git repository and share the repository once completed",
];

function About({ toggleHandler }) {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <div
          className='lg:hidden p-2 rounded-lg bg-blue-200 hover:scale-105 duration-150 ease-in-out cursor-pointer mr-5'
          onClick={toggleHandler}
        >
          <HiOutlineMenuAlt4 size={21} className='text-blue-600' />
        </div>
        <h1 className='text-3xl font-semibold text-blue-600'>About</h1>
      </div>
      <div className='glass rounded-xl p-10'>
        <div className='space-y-3'>
          {outlines.map((outline, i) => (
            <div key={i} className='flex space-x-2'>
              <BsCheckAll size={21} className='text-blue-500 flex-none mt-1' />
              <p className='text-lg font-medium'>{outline}</p>
            </div>
          ))}
        </div>

        <div className='mt-10 flex space-x-2 p-4 red-glass rounded-md'>
          <AiTwotoneAlert
            size={21}
            className='text-red-600 flex-none mt-[2px]'
          />
          <p className='text-lg font-medium text-red-600'>
            Deadline for project submission: 2pm, 29th August, 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
