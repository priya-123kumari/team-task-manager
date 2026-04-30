import { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/api/tasks/dashboard").then(res => setData(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-200 p-4">Total: {data.total}</div>
        <div className="bg-green-200 p-4">Completed: {data.completed}</div>
        <div className="bg-yellow-200 p-4">Pending: {data.pending}</div>
        <div className="bg-red-200 p-4">Overdue: {data.overdue}</div>
        <button
  className="bg-blue-500 text-white px-4 py-2 mb-4"
  onClick={() => navigate("/projects")}
>
  Go to Projects
</button>

<button
  className="bg-green-500 text-white px-4 py-2 ml-2"
  onClick={() => navigate("/tasks")}
>
  Go to Tasks
</button>
      </div>
    </div>
  );
}