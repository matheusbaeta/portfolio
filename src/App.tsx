import { Routes, Route } from 'react-router-dom';
import { NavbarRetro } from './components/NavbarRetro/NavbarRetro';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import './styles/layout.css';

function App() {
  return (
    <div className="app-main-frame">
      {/* SIDEBAR: Command Menu Panel */}
      <aside className="app-sidebar">
        <NavbarRetro />
      </aside>

      {/* VIEWPORT: The "Scene" or "Data View" */}
      <main className="app-content">
        <div className="app-content-inner">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
