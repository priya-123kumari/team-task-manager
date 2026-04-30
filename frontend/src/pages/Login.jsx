import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/api/auth/login", data);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded">
        <h2 className="text-xl mb-4">Login</h2>
        <input placeholder="Email" className="border p-2 w-full mb-2"
          onChange={(e)=>setData({...data,email:e.target.value})}/>
        <input type="password" placeholder="Password" className="border p-2 w-full mb-2"
          onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button className="bg-blue-500 text-white px-4 py-2">Login</button>
        <p className="mt-2 text-sm">
  Don't have an account?{" "}
  <>
  <Navbar />
  <div className="p-6">
    {/* existing content */}
  </div>
</>
  <span
    className="text-blue-500 cursor-pointer"
    onClick={() => navigate("/signup")}
  >
    Signup
  </span>
</p>
      </form>
    </div>
  );
}