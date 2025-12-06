import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main.jsx";
import PeriodicTable from "./pages/PeriodicTable/PeriodicTable.jsx";
import Callback from "./pages/Callback/Callback.jsx";
import Quiz from './pages/Quiz/quiz.jsx'
import Ranking from './pages/Ranking/ranking.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/PeriodicTable" element={<PeriodicTable />} />
        <Route path="/oauth" element={<Callback />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;