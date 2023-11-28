import Container from "./components/Container";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
