import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-700 to-teal-400 text-white">
      <h1 className="text-4xl font-bold mb-10">Welcome To Quantum IT Innovation Task
</h1>
      <div className="flex gap-6">
        <button
          onClick={() => navigate("/login")}
          className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl text-white font-semibold text-lg shadow-lg"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl text-white font-semibold text-lg shadow-lg"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
