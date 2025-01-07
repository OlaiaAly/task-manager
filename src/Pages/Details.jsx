import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const date = searchParams.get("date");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button className="absolute left-0 top-0 bottom-0 text-slate-100 ">
            <ChevronLeftIcon onClick={() => navigate(-1)} />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center p-1">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md relative">
          <div className="absolute top-0 right-0">
            <small className="m-1 pr-0 pt-0">{date}</small>
          </div>
          <h1 className="text-xl font-bold text-slate-600"> {title} </h1>
          <p className="text-slate-600"> {description} </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
