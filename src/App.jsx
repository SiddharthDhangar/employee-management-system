import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userData } = useAuth();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setCurrentEmployee(loggedInUser.data);
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setCurrentEmployee(null);
    navigate("/");
  };

  const handleLogging = (email, password) => {
    if (email === "admin@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      navigate("/AdminDashboard");
    } else if (userData) {
      const employee = userData.find(
        (emp) => emp.email === email && emp.password === password,
      );
      if (employee) {
        setUser("employee");
        setCurrentEmployee(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
        navigate("/EmployeeDashboard");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Login handleLogging={handleLogging} />}
        ></Route>
        <Route
          path="/AdminDashboard"
          element={
            user === "admin" ? (
              <AdminDashboard handleLogout={handleLogout} />
            ) : (
              <Login handleLogging={handleLogging} />
            )
          }
        ></Route>
        <Route
          path="/EmployeeDashboard"
          element={
            user === "employee" ? (
              <EmployeeDashboard
                handleLogout={handleLogout}
                data={currentEmployee}
              />
            ) : (
              <Login handleLogging={handleLogging} />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
