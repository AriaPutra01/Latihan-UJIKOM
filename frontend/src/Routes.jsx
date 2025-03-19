import React from "react";
import { Routes, Route } from "react-router";
import Welcome from "./pages/Welcome";

export default function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}
