import { ChevronRightIcon, Trash } from "lucide-react";
/* eslint-disable react/prop-types */
function Task({ tasks, onTaskClick, onTaskDelete }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-b-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full text-left bg-slate-400 text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => onTaskDelete(task.id)}
          >
            <Trash />
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Task;
