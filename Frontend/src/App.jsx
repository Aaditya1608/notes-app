import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}
