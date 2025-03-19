import React from "react";
import { Routes, Route } from "react-router";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

export default function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
