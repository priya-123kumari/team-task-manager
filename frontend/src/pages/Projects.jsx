import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [data, setData] = useState({ name: "", description: "" });

  // ✅ Fetch Projects
  const fetchProjects = async () => {
    try {
      const res = await API.get("/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ Create Project
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/projects", data);
      alert("Project Created");
      setData({ name: "", description: "" });
      fetchProjects();
    } catch (err) {
      alert("Only admin can create project");
      console.log(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Projects</h1>

      {/* Create Project */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          placeholder="Project Name"
          className="border p-2 mr-2"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          placeholder="Description"
          className="border p-2 mr-2"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <>
  <Navbar />
  <div className="p-6">
    {/* existing content */}
  </div>
</>
        <button className="bg-blue-500 text-white px-4 py-2">
          Create
        </button>
      </form>

      {/* Project List */}
      <div>
        {projects.map((p) => (
          <div key={p._id} className="border p-3 mb-2">
            <h3 className="font-bold">{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}