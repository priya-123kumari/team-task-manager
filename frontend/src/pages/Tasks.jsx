import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function Tasks() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [data, setData] = useState({
    title: "",
    description: "",
    status: "todo"
  });

  // 🔹 Fetch Projects
  const fetchProjects = async () => {
    const res = await API.get("/api/projects");
    setProjects(res.data);
  };

  // 🔹 Fetch Tasks by Project
  const fetchTasks = async (projectId) => {
    const res = await API.get(`/api/tasks/project/${projectId}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // 🔹 Create Task
  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/api/tasks", {
      ...data,
      project: selectedProject
    });

    alert("Task Created");
    fetchTasks(selectedProject);
  };

  // 🔹 Update Task Status
  const updateStatus = async (id, status) => {
    await API.put(`/api/tasks/${id}`, { status });
    fetchTasks(selectedProject);
  };

  return (
    
    <div className="p-6">
      <h1 className="text-2xl mb-4">Tasks</h1>

      {/* Select Project */}
      <select
        className="border p-2 mb-4"
        onChange={(e) => {
          setSelectedProject(e.target.value);
          fetchTasks(e.target.value);
        }}
      >
        <option>Select Project</option>
        {projects.map((p) => (
          <option key={p._id} value={p._id}>
            {p.name}
          </option>
        ))}
      </select>
      <>
  <Navbar />
  <div className="p-6">
    {/* existing content */}
  </div>
</>

      {/* Create Task */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          placeholder="Title"
          className="border p-2 mr-2"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <input
          placeholder="Description"
          className="border p-2 mr-2"
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <button className="bg-green-500 text-white px-4 py-2">
          Add Task
        </button>
      </form>

      {/* Task List */}
      <div>
        {tasks.map((t) => (
          <div key={t._id} className="border p-3 mb-2">
            <h3 className="font-bold">{t.title}</h3>
            <p>{t.description}</p>
            <p>Status: {t.status}</p>

            <button
              className="bg-yellow-400 px-2 py-1 mr-2"
              onClick={() => updateStatus(t._id, "in-progress")}
            >
              In Progress
            </button>

            <button
              className="bg-green-400 px-2 py-1"
              onClick={() => updateStatus(t._id, "done")}
            >
              Done
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
}