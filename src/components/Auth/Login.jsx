import React, { useState } from "react";

const Login = ({ handleLogging }) => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const userCredential = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserCred((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogging(userCred.email, userCred.password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <form
        onSubmit={submitHandler}
        className="w-[90%] sm:max-w-md bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 flex flex-col gap-5"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back 👋</h1>
          <p className="text-gray-400 text-sm mt-1">Login to continue</p>
        </div>

        <input
          type="email"
          name="email"
          value={userCred.email}
          onChange={userCredential}
          placeholder="Enter Email"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          value={userCred.password}
          onChange={userCredential}
          placeholder="Enter Password"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
