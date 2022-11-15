import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Portfolio/projects"
import ProjectDisplay from "./components/Portfolio/projectDisplay"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
