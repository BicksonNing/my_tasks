// headless ui
import { Dialog, Transition } from "@headlessui/react";

// react
import { Fragment, useEffect, useState } from "react";

// icons
import { GrFormClose } from "react-icons/gr";
import { FaRegSave } from "react-icons/fa";

// firebase
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";

function TaskForm({ isUpdate, selectedData, isOpen, setIsOpen, setIsUpdate }) {
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    date: "",
    status: "",
  });

  useEffect(() => {
    if (isUpdate && selectedData) {
      setTimeout(() => {
        setInputValues({
          title: selectedData.title,
          description: selectedData.description,
          date: selectedData.date,
          status: selectedData.status,
        });
      }, 100);
    }
  }, [selectedData, isUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // validate
  const validate =
    inputValues.title === "" ||
    inputValues.description === "" ||
    inputValues.date === "" ||
    inputValues.status === "";

  // clearState
  const clearState = () => {
    setInputValues({ date: "", description: "", title: "", status: "" });
  };

  // closeModal
  function closeModal() {
    setIsOpen(false);
    setIsUpdate(false);
    clearState();
  }

  // Add Task
  const addTask = async () => {
    if (loading) return;

    setLoading(true);

    await addDoc(collection(db, "tasks"), {
      title: inputValues.title,
      description: inputValues.description,
      date: inputValues.date,
      status: inputValues.status,
      timestamp: serverTimestamp(),
    });

    setTimeout(() => {
      closeModal();
      setLoading(false);
      clearState();
    }, 1);
  };

  // Update Task

  const updateTask = async () => {
    if (loading) return;

    setLoading(true);

    await updateDoc(doc(db, "tasks", selectedData.id), {
      title: inputValues.title,
      description: inputValues.description,
      date: inputValues.date,
      status: inputValues.status,
    });

    setTimeout(() => {
      closeModal();
      setLoading(false);
      clearState();
    }, 1);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto mr-5'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='flex items-center justify-between pb-4 border-b'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      {isUpdate ? "Update Task" : "Add Task"}
                    </Dialog.Title>
                    <button onClick={closeModal}>
                      <GrFormClose size={21} />
                    </button>
                  </div>
                  <div className='mt-3 space-y-3'>
                    <div>
                      <input
                        type='text'
                        placeholder='Enter name of the task'
                        className='w-full focus:outline-none px-4 py-3 border rounded-lg'
                        name='title'
                        value={inputValues.title}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <textarea
                        className='w-full focus:outline-none px-4 py-3 border rounded-lg'
                        name='description'
                        value={inputValues.description}
                        onChange={handleChange}
                        cols='30'
                        rows='5'
                        placeholder='Enter description'
                      ></textarea>
                    </div>

                    <div className='md:flex items-center space-y-3 md:space-y-0 md:space-x-4'>
                      <div className='w-full'>
                        <input
                          type='date'
                          name='date'
                          value={inputValues.date}
                          onChange={handleChange}
                          className='w-full focus:outline-none px-4 py-3 border rounded-lg'
                        />
                      </div>

                      <div className='rounded-lg  border block w-full px-4 '>
                        <select
                          id='countries'
                          className='w-full py-3 focus:outline-none'
                          name='status'
                          value={inputValues.status}
                          onChange={handleChange}
                        >
                          <option value=''>Status</option>
                          <option value='pending'>Pending</option>
                          <option value='onhold'>On Hold</option>
                          <option value='completed'>Completed</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className='mt-4'>
                    <button
                      disabled={validate}
                      type='button'
                      className={
                        validate
                          ? "btn-disabled"
                          : loading
                          ? "btn-loading"
                          : "btn-submit"
                      }
                      onClick={isUpdate ? updateTask : addTask}
                    >
                      <FaRegSave size={14} />
                      {loading ? (
                        <span>{isUpdate ? "Updating" : "Saving..."} </span>
                      ) : (
                        <span>{isUpdate ? "Update" : "Save"}</span>
                      )}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default TaskForm;
