import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main.jsx";
import PeriodicTable from "./pages/PeriodicTable/PeriodicTable.jsx";
import Callback from "./pages/Callback/Callback.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/PeriodicTable" element={<PeriodicTable />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;