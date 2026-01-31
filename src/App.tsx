import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavbarRetro } from './components/NavbarRetro/NavbarRetro';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="app-container" style={{
      display: 'flex',
      height: '100vh',
      padding: '20px',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <aside style={{ width: '250px', flexShrink: 0 }}>
        <NavbarRetro />
      </aside>
      <main style={{ flex: 1, overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
