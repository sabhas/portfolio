import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/home"
import Experience from "./pages/experience"
import Projects from "./pages/projects"
import ProjectDisplay from "./pages/projectDisplay"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
