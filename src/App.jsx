import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./componets/AddTask";
import Task from "./componets/Task";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    try {
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Erro ao carregar tarefas do localStorage:", error);
      return []; // Retorna um array vazio em caso de erro
    }
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {/
    // console.log("Tasks: ", tasks);
    // CHAMAR API SE NECESSARIO
    // async function fetch() {
    //   let data = await fetch();
    // }
    // Executada uma vez ao abrir o app
    // console.log("Executada uma vez ao abrir o app");
  // }, []);

  function onTaskClick(TaskId) {
    const newTasks = tasks.map((task) => {
      if (TaskId == task.id) return { ...task, isCompleted: !task.isCompleted };
      return task;
    });
    setTasks(newTasks);
    console.log("onTaskClick");
  }

  function onTaskDelete(TaskId) {
    const newTasks = tasks.filter((task) => task.id != TaskId);
    setTasks(newTasks);
    console.log("onTaskDelete");
  }

  function addTask({ title, description }) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    console.log("addTask");
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center p-1">
          Gerenciador de Tarefas
        </h1>
        <AddTask addTask={addTask} />
        {tasks && tasks.length > 0 && (
          <Task
            tasks={tasks}
            onTaskClick={onTaskClick}
            onTaskDelete={onTaskDelete}
          />
        )}
      </div>
    </div>
  );
}
export default App;
