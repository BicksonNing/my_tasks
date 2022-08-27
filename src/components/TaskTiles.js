// images
import completeImage from "../assets/complete1.png";
import holdImage from "../assets/hold.png";
import pendingImage from "../assets/pending.png";
import totalImage from "../assets/total.png";

function TaskTiles({ tasks }) {
  const completedTask = tasks.filter(
    (task) => task.data().status === "completed"
  );

  const pendingTask = tasks.filter((task) => task.data().status === "pending");

  const onHoldTask = tasks.filter((task) => task.data().status === "onhold");

  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-4'>
      <div className='glass p-3 rounded-xl flex space-x-3 items-center'>
        <img
          src={totalImage}
          className='h-24 w-24 object-cover rounded-lg opacity-90'
          alt='total'
        />

        <div>
          <h1 className='text-4xl font-extrabold text-blue-400'>
            {tasks.length ? tasks.length : 0}
          </h1>
          <p className='text-md font-semibold tracking-wide'>Total Tasks</p>
        </div>
      </div>

      <div className='glass p-3 rounded-xl flex space-x-3 items-center'>
        <img
          src={completeImage}
          className='h-24 w-24 object-cover rounded-lg opacity-90'
          alt='complete_image'
        />
        <div>
          <h1 className='text-4xl font-extrabold text-blue-400'>
            {completedTask.length ? completedTask.length : 0}
          </h1>
          <p className='text-md font-semibold tracking-wide'>Tasks Completed</p>
        </div>
      </div>

      <div className='glass p-3 rounded-xl flex space-x-3 items-center'>
        <img
          src={pendingImage}
          className='h-24 w-24 object-cover rounded-lg opacity-90'
          alt='complete_image'
        />
        <div>
          <h1 className='text-4xl font-extrabold text-blue-400'>
            {pendingTask.length ? pendingTask.length : 0}
          </h1>
          <p className='text-md font-semibold tracking-wide'>Tasks Pending</p>
        </div>
      </div>

      <div className='glass p-3 rounded-xl flex space-x-3 items-center'>
        <img
          src={holdImage}
          className='h-24 w-24 object-cover rounded-lg opacity-90'
          alt='complete_image'
        />
        <div>
          <h1 className='text-4xl font-extrabold text-blue-400'>
            {onHoldTask.length ? onHoldTask.length : 0}
          </h1>
          <p className='text-md font-semibold tracking-wide'>Tasks onhold</p>
        </div>
      </div>
    </div>
  );
}

export default TaskTiles;
