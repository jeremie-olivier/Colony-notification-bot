import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AdminPage } from "./pages/AdminPage";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/adminPage" element={<AdminPage />} />;
        <Route path="/userPage" element={<UserPage />} />;
      </Routes>
    </div>
  );
}

export default App;
