import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./componets/AddTask";
import Task from "./componets/Task";
import Button from "./componets/Button";
import { Link } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    try {
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Erro ao carregar tarefas do localStorage:", error);
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  function onTaskClick(TaskId) {
    const newTasks = tasks.map((task) => {
      if (TaskId == task.id) return { ...task, isCompleted: !task.isCompleted };
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(TaskId) {
    const newTasks = tasks.filter((task) => task.id != TaskId);
    setTasks(newTasks);
  }

  function addTask({ title, description, date }) {
    const newTask = {
      id: uuidv4(),
      date,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setErrorMessage(""); // Clear the error message if task is added successfully.
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center p-1">
          Gerenciador de Tarefas
        </h1>
        {errorMessage && ( // Conditionally render the error message
          <div className="text-red-500 text-center">{errorMessage}</div>
        )}
        <AddTask addTask={addTask} setErrorMessage={setErrorMessage} />{" "}
        {/* Pass the potentially updated addTask */}
        {tasks && tasks.length > 0 && (
          <Task
            tasks={tasks}
            onTaskClick={onTaskClick}
            onTaskDelete={onTaskDelete}
          />
        )}
        <div className="text-center">
          <Link to="/login">
            <Button>Logout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
