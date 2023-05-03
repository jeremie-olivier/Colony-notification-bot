import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AdminPage } from "./pages/AdminPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/adminPage" element={<AdminPage />} />;
      </Routes>
    </div>
  );
}

export default App;
