import { useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/auth/signup", data);
      alert("Signup successful");
      navigate("/");
    } catch (err) {
      alert("Error in signup");
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded w-80">
        <h2 className="text-xl mb-4">Signup</h2>

        <input
          placeholder="Name"
          className="border p-2 w-full mb-2"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <>
  <Navbar />
  <div className="p-6">
    {/* existing content */}
  </div>
</>

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <select
          className="border p-2 w-full mb-4"
          onChange={(e) => setData({ ...data, role: e.target.value })}
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>

        <button className="bg-green-500 text-white px-4 py-2 w-full">
          Signup
        </button>
      </form>
    </div>
  );
}