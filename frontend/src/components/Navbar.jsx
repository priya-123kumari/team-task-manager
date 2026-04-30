import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold cursor-pointer" onClick={()=>navigate("/dashboard")}>
        🚀 Task Manager
      </h1>

      <div className="space-x-4">
        <button onClick={() => navigate("/dashboard")} className="hover:underline">Dashboard</button>
        <button onClick={() => navigate("/projects")} className="hover:underline">Projects</button>
        <button onClick={() => navigate("/tasks")} className="hover:underline">Tasks</button>
        <button onClick={logout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}