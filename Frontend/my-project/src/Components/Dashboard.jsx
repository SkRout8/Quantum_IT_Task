import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>

        
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Date of Birth</th>
                <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-2 px-4 border-b text-gray-900">{user?.name}</td>
                <td className="py-2 px-4 border-b text-gray-900">{user?.email}</td>
                <td className="py-2 px-4 border-b text-gray-900">{user?.dob}</td>
                <td className="py-2 px-4 border-b text-gray-900">{user?.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
