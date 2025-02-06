import { useState } from "react";
import Input from "./Input";
function AddTask({ addTask, setErrorMessage }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        value={title}
        maxlength="40"
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digite o titulo da tarefa."
      />
      <Input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite o descrição da tarefa."
      />

      <button
        onClick={() => {
          const data = new Date();
          const options = { day: "2-digit", month: "2-digit", year: "numeric" };
          const date = data.toLocaleDateString("pt-BR", options);
          if (!title || !description || !date) {
            setErrorMessage("Todos os campos são obrigatórios.");
            return; // Stop adding the task
          }
          addTask({ title, description, date });
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded font-weight"
      >
        Adiconar
      </button>
    </div>
  );
}
export default AddTask;
