// import React, { useState } from 'react';
// import Button from './Button';
// import TaskItem from './Save'; // Import the TaskItem component

// const Task: React.FC = () => {
//   const [buttonState, setButtonState] = useState({
//     text: 'Add',
//     bgColorClass: 'bg-blue-500',
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [task, setTask] = useState('');
//   const [date, setDate] = useState('');
//   const [tasks, setTasks] = useState<{ task: string; date: string }[]>([]); // Array to store tasks

//   const handleClick = () => {
//     if (buttonState.text === 'Add') {
//       setButtonState({
//         text: 'Close',
//         bgColorClass: 'bg-red-500',
//       });
//       setIsEditing(true);
//     } else {
//       setButtonState({
//         text: 'Add',
//         bgColorClass: 'bg-blue-500',
//       });
//       setIsEditing(false);
//       setTask('');
//       setDate('');
//     }
//   };

//   const handleSave = () => {
//     if (task && date) {
//       setTasks((prevTasks) => [...prevTasks, { task, date }]); // Save the task and date
//       setTask(''); 
//       setDate(''); 
//     }
//   };

//   // Function to delete a task
//   const handleDelete = (taskToDelete: string) => {
//     setTasks((prevTasks) => prevTasks.filter(taskItem => taskItem.task !== taskToDelete));
//   };

//   return (
//     <div className="w-full flex justify-center items-center py-10">
//       <div className="w-[600px] border border-blue-700 p-4 bg-white">
//         <div className='flex items-center justify-between relative w-full p-4 '>
//           <h1 className='font-bold text-4xl text-black'>Task Tracker</h1>
//           <Button
//             text={buttonState.text}
//             onClick={handleClick}
//             bgColorClass={buttonState.bgColorClass}
//             textColorClass="text-white"
//             className="absolute top-2 right-2"
//           />
//         </div>

//         {isEditing && (
//           <div className="mt-16 flex flex-col items-center w-full">
//             <input
//               type="text"
//               placeholder="Task"
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//               className="border border-gray-400 p-2 mb-2 rounded w-full"
//             />
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="border border-gray-400 p-2 mb-2 rounded w-full"
//             />
//             <Button
//               text="Save Task"
//               onClick={handleSave}
//               bgColorClass="bg-green-500"
//               textColorClass="text-white"
//             />
//           </div>
//         )}

//         {/* Display saved tasks */}
//         <div className="mt-10">
//           {tasks.map((taskItem, index) => (
//             <TaskItem 
//               key={index} 
//               task={taskItem.task} 
//               date={taskItem.date} 
//               onDelete={handleDelete} // Pass the delete function
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Task;
'use client'

import React, { useState } from 'react'
import { Plus, X, Trash2 } from 'lucide-react'

type TaskItem = {
  task: string
  date: string
}

export default function Component() {
  const [isEditing, setIsEditing] = useState(false)
  const [task, setTask] = useState('')
  const [date, setDate] = useState('')
  const [tasks, setTasks] = useState<TaskItem[]>([])

  const handleToggleEdit = () => {
    setIsEditing(!isEditing)
    setTask('')
    setDate('')
  }

  const handleSave = () => {
    if (task && date) {
      setTasks((prevTasks) => [...prevTasks, { task, date }])
      setTask('')
      setDate('')
    }
  }

  const handleDelete = (taskToDelete: string) => {
    setTasks((prevTasks) => prevTasks.filter(taskItem => taskItem.task !== taskToDelete))
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-100 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mr-10">Task Tracker</h1>
        <button
          onClick={handleToggleEdit}
          className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isEditing ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500' : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500'
          }`}
          aria-label={isEditing ? 'Close' : 'Add task'}
        >
          {isEditing ? <X className="h-5 w-5 text-white" /> : <Plus className="h-5 w-5 text-white" />}
        </button>
      </div>
      <div className="p-6">
        {isEditing && (
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSave}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Save Task
            </button>
          </div>
        )}

        <div className="space-y-4">
          {tasks.map((taskItem, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between shadow">
              <div>
                <h3 className="font-semibold text-gray-800">{taskItem.task}</h3>
                <p className="text-sm text-gray-600">{taskItem.date}</p>
              </div>
              <button
                onClick={() => handleDelete(taskItem.task)}
                className="text-gray-500 hover:text-red-500 focus:outline-none"
                aria-label="Delete task"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}