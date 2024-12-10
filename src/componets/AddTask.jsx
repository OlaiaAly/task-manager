function AddTask() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        name="title"
        id="title"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        placeholder="Digite o titulo da tarefa."
      />
      <input
        type="text"
        name="description"
        id="description"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        placeholder="Digite a descrição da tarefa."
      />
      <button className="bg-slate-500 text-white px-4 py-2 rounded font-weight">
        Adiconar
      </button>
    </div>
  );
}
export default AddTask;
