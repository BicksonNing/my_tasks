// icons
import moment from "moment";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import GlassButton from "./GlassButton";
import Pagination from "./Pagination";
import TaskForm from "./TaskForm";

function RecentTasks({ tasks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(10);
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTask = tasks.slice(indexOfFirstTask, indexOfLastTask);
  const nPages = Math.ceil(tasks.length / tasksPerPage);

  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const [selectedData, setSelectedData] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
    status: "",
  });

  // updateTask
  const updateTask = (id, title, description, date, status) => {
    setIsOpen(true);
    setIsUpdate(true);
    setSelectedData({ id, title, description, date, status });
  };

  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <FaRegClock size={20} className='text-blue-600 mt-1' />
          <h1 className='text-2xl font-semibold text-blue-600'>RecentTasks</h1>
        </div>
        <GlassButton text='Add Task' openModal={openModal} />
      </div>

      <div className='overflow-x-auto relative shadow-md rounded-lg glass'>
        <table className='w-full text-sm text-left'>
          <thead className='text-xs uppercase border-b'>
            <tr>
              <th scope='col' className='py-5 px-6'>
                Sl.
              </th>
              <th scope='col' className='py-5 px-6'>
                Task Title
              </th>
              <th scope='col' className='py-5 px-6'>
                Description
              </th>
              <th scope='col' className='py-5 px-6'>
                Task Date
              </th>
              <th scope='col' className='py-5 px-6'>
                Status
              </th>
              <th scope='col' className='py-5 px-6'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTask.map((task, i) => (
              <tr key={task.id} className='border-b hover:bg-gray-100/30'>
                <td className='py-4 px-6'>{i + 1}</td>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 S capitalize'
                >
                  {task.data().title}
                </th>
                <td className='py-4 px-6 capitalize'>
                  {task.data().description}
                </td>
                <td className='py-4 px-6 whitespace-nowrap'>
                  {moment(task.data().date).format("DD-MMM-yyyy")}
                </td>
                <td className='py-4 px-6'>
                  {task.data().status === "onhold" ? (
                    <div className='px-6 max-w-min py-1 rounded-full text-xs font-medium bg-red-300 whitespace-nowrap text-center'>
                      On Hold
                    </div>
                  ) : task.data().status === "pending" ? (
                    <div className='px-6 py-1 rounded-full text-xs font-medium bg-yellow-300 whitespace-nowrap text-center max-w-min'>
                      Pending
                    </div>
                  ) : (
                    <div className='px-6 max-w-min py-1 rounded-full text-xs font-medium bg-green-300 whitespace-nowrap text-center'>
                      Completed
                    </div>
                  )}
                </td>
                <td className='py-4 px-6 text-right'>
                  <button
                    onClick={() =>
                      updateTask(
                        task.id,
                        task.data().title,
                        task.data().description,
                        task.data().date,
                        task.data().status
                      )
                    }
                    className='font-medium text-blue-600 dark:text-blue-500  active:scale-110 duration-200 ease-in-out'
                  >
                    <AiOutlineEdit size={23} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <TaskForm
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        selectedData={selectedData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default RecentTasks;
