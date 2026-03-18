import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(credential.email, credential.password);
    setCredential({
      email: "",
      password: "",
    });
  };

  const userCredential = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredential({ ...credential, [name]: value });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex border border-gray-50 p-10 flex-col items-center w-[90%] sm:max-w-96 m-auto mt-40 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mt-10">
        <p className="prata-regular text-3xl text-white">Login In</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-50" />
      </div>
      <input
        onChange={userCredential}
        className="w-full bg-white px-3 py-2 border border-gray-800"
        type="email"
        name="email"
        value={credential.email}
        placeholder="Email"
        required
      />
      <input
        onChange={userCredential}
        className="w-full bg-white px-3 py-2 border border-gray-800"
        type="password"
        name="password"
        value={credential.password}
        placeholder="Password"
        required
      />
      <button className="bg-black cursor-pointer text-white font-light px-8 py-2 mt-4">
        Login
      </button>
    </form>
  );
};

export default Login;
