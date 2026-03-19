import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ handleLogout, data }) => {
  const userName = data ? data.firstName : "Admin";
  return (
    <div className="flex items-center justify-between bg-[#111827] p-5 rounded-xl shadow-md">
      <div>
        <h2 className="text-gray-400 text-sm">Welcome back</h2>
        <h1 className="text-2xl font-bold text-white">{userName}👋</h1>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white font-medium transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
