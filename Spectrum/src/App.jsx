import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main.jsx";
import PeriodicTable from "./pages/PeriodicTable/PeriodicTable.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/PeriodicTable" element={<PeriodicTable />} />
      </Routes>
    </Router>
  );
}

export default App;