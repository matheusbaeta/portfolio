import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavbarRetro } from './components/NavbarRetro/NavbarRetro';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="app-main-frame" style={{
      /* Fixed layout container mimicking a game screen */
      display: 'grid',
      gridTemplateColumns: 'minmax(240px, 20%) 1fr',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'var(--pk-void)',
      overflow: 'hidden'
    }}>

      {/* SIDEBAR: Command Menu Panel */}
      <aside style={{
        borderRight: '4px double var(--pk-frame-base)',
        backgroundColor: 'var(--pk-indigo-deep)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'inset -4px 0 10px rgba(0,0,0,0.5)',
        zIndex: 10
      }}>
        <NavbarRetro />
      </aside>

      {/* VIEWPORT: The "Scene" or "Data View" */}
      <main style={{
        position: 'relative',
        overflowY: 'auto',
        padding: '30px 40px',
        /* CRT curved corner effect illusion (optional, keeping clean for now) */
        background: 'var(--bg-color)',
        backgroundImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 0' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
