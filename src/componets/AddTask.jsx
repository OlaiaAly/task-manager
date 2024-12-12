import { useState } from "react";
import Input from "./Input";
function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        value={title}
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
          if (!title.trim() || !description.trim()) {
            return alert("Campos vazios não podem ser adicionados.");
          }
          addTask({ title, description });
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
