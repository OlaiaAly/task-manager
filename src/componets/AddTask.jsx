import { useState } from "react";
function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        placeholder="Digite o titulo da tarefa."
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        placeholder="Digite a descrição da tarefa."
      />
      <button
        onClick={() => {
          if (!title.trim() && !description.trim()) {
            return alert("Campos vásios não podem ser adicionados.");
          }
          addTask({ title, description });
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded font-weight"
      >
        Adiconar
      </button>
    </div>
  );
}
export default AddTask;
