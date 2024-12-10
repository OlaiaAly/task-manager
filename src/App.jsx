import { useState } from "react";
import AddTask from "./componets/AddTask";
import Task from "./componets/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação!",
      description: "Caminho para se tornar um DevFulStacK",
      isCompleted: false,
    },
    {
      id: "3",
      title: "Ler um livro",
      description: "Explorar novos mundos e aprender coisas novas.",
      isCompleted: false,
    },
    {
      id: "4",
      title: "Fazer o almoço",
      description: "Preparar uma refeição saudável e saborosa.",
      isCompleted: false,
    },
    {
      id: "5",
      title: "Pagar as contas",
      description: "Manter as finanças em dia.",
      isCompleted: false,
    },
    {
      id: "6",
      title: "Ligar para Marcos",
      description: "Marcar um encontro para bater um papo.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(TaskId) {
    const newTasks = tasks.map((task) => {
      if (TaskId == task.id) return { ...task, isCompleted: !task.isCompleted };
      return task;
    });
    setTasks(newTasks);
    console.log(newTasks);
  }

  function onTaskDelete(TaskId) {
    const newTasks = tasks.filter((task) => task.id != TaskId);
    setTasks(newTasks);
    console.log(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center p-1">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Task
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}
export default App;
