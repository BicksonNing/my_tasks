// components
import { TaskForm, EmptyMessage, TaskTiles, RecentTasks } from "../components";

// firebase
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../firebase";

// icons
import { HiOutlineMenuAlt4 } from "react-icons/hi";

// hooks
import { useState, useEffect } from "react";

function Home({ toggleHandler }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "tasks"), orderBy("timestamp", "desc")),
      (snapshot) => setTasks(snapshot.docs)
    );
  }, [db]);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className='lg:hidden items-center flex mb-10'>
        <div
          className=' p-2 rounded-lg bg-blue-200 hover:scale-105 duration-150 ease-in-out cursor-pointer mr-5'
          onClick={toggleHandler}
        >
          <HiOutlineMenuAlt4 size={21} className='text-blue-600' />
        </div>
        <h1 className='text-3xl font-semibold text-blue-600'>My Task</h1>
      </div>

      <div className='space-y-12'>
        {tasks.length === 0 ? (
          <EmptyMessage openModal={openModal} />
        ) : (
          <div className='space-y-12'>
            <TaskTiles tasks={tasks} />
            <RecentTasks tasks={tasks && tasks} openModal={openModal} />
          </div>
        )}
      </div>

      <TaskForm isUpdate={false} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Home;
