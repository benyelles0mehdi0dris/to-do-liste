import React from 'react';
import Button from './Button';

interface TaskItemProps {
  task: string;
  date: string;
  onDelete: (task: string) => void; // Add onDelete prop
}

const TaskItem: React.FC<TaskItemProps> = ({ task, date, onDelete }) => {
  const handleClick = () => {
    onDelete(task); // Call the onDelete function passed from parent
  };

  return (
    <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md overflow-hidden mb-4">
      <div className="p-4 flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-gray-800">{task}</h2>
          <p className="text-xl text-blue-600">{date}</p>
        </div>
        <Button 
          text="X" 
          onClick={handleClick} 
          bgColorClass="bg-red-500" 
          textColorClass="text-white" 
          className="ml-4"
        />
      </div>
    </div>
  );
};

export default TaskItem;
