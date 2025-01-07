import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Task({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    query.set("date", task.date);
    navigate(`/details?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-b-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`relative truncate w-full text-left bg-slate-400 text-white px-2 py-3 mt-0 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            <div className="absolute top-0 right-0">
              <small className="m-1 pr-0 pt-0 text-xs">{task.date ?? ""}</small>
            </div>
            {task.title}
          </button>

          <Button onClick={() => onTaskDelete(task.id)}>
            <Trash />
          </Button>

          <Button onClick={() => onSeeDetailClick(task)}>
            <ChevronRightIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Task;
