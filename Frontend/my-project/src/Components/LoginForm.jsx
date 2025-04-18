import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-700 to-teal-400">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-8 rounded-xl w-96 shadow-lg"
      >
        <h2 className="text-2xl text-white font-semibold text-center mb-6">
          Login
        </h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 rounded bg-slate-700 text-white"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-6 rounded bg-slate-700 text-white"
        />
        <button
          type="submit"
          className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded mb-4"
        >
          Login
        </button>
        <p
          className="text-center text-sm text-white cursor-pointer hover:underline"
          onClick={() => navigate("/register")}
        >
          Don’t have an account? Register
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
