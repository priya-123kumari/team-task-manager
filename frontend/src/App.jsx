import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={
  <ProtectedRoute><Dashboard /></ProtectedRoute>
} />

<Route path="/projects" element={
  <ProtectedRoute><Projects /></ProtectedRoute>
} />

<Route path="/tasks" element={
  <ProtectedRoute><Tasks /></ProtectedRoute>
} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<Signup />} /> 
           <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;