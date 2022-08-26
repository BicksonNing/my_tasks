import React from "react";
import { MdTask } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CircleAvatar from "./CircleAvatar";

const links = [
  {
    name: "My Tasks",
    icon: <MdTask />,
    url: "/",
  },
  {
    name: "About",
    icon: <FaBookOpen />,
    url: "/about",
  },
];

const SideBar = ({ toggleHandler }) => {
  return (
    <aside className='flex flex-col pl-5 py-8 glass shadow-xl h-full w-72 transition-all duration-500 space-y-16'>
      {/* <div className='flex items-center justify-between w-full'> */}
      {/* <button
          //   onClick={handleSideBar}
          className='bg-blue-50 dark:bg-slate-700 p-1.5 rounded-lg shadow-sm hover:scale-110 transition-all duration-200'
        ></button> */}
      {/* </div> */}

      <div className='pl-5'>
        <CircleAvatar />
      </div>

      <div className='flex flex-col space-y-5 w-full'>
        {links.map((link, i) => (
          <NavLink
            onClick={toggleHandler}
            key={i}
            to={link.url}
            className={({ isActive }) =>
              isActive ? "active-link" : "in-active-link"
            }
          >
            <div className='mr-1'>{link.icon}</div>
            <div>{link.name}</div>
          </NavLink>
        ))}
      </div>

      <div className='grow' />
    </aside>
  );
};

export default SideBar;
