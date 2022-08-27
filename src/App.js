// react
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// components
import { SideBar } from "./components";

// pages
import { About, Home } from "./pages";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex bg-blue-100 md:flex-row flex-col min-h-screen transition-height duration-75 ease-out w-full'>
      <div className='hidden lg:block h-screen flex-initial'>
        <SideBar />
      </div>
      <div className='p-6 md:p-12 flex-grow h-screen overflow-y-scroll'>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home toggleHandler={toggleHandler} />}
          />
          <Route
            exact
            path='/about'
            element={<About toggleHandler={toggleHandler} />}
          />
        </Routes>
      </div>

      {/* mobile sidebar */}
      <div
        className={`lg:hidden fixed cursor-pointer bottom-0 left-0 min-h-screen w-full backdrop-blur-sm bg-white/10 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleHandler}
      />
      <div
        className={`fixed w-80 top-0 left-0 h-screen z-50 overflow-auto ease-in-out duration-500 transition-all transform lg:-translate-x-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideBar toggleHandler={toggleHandler} />
      </div>
    </div>
  );
}

export default App;
