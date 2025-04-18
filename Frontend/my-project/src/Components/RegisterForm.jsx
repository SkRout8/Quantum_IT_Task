import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch("http://localhost:4000/api/v1/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.data));
        navigate("/dashboard");
      } else {
        alert("Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-700 to-teal-400">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded-xl w-96 shadow-lg"
      >
        <h2 className="text-2xl text-white font-semibold text-center mb-6">
          Register
        </h2>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 rounded bg-slate-700 text-white"
        />
        <input
          name="dob"
          type="date"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 rounded bg-slate-700 text-white"
        />
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
          Register
        </button>
        <p
          className="text-center text-sm text-white cursor-pointer hover:underline"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
