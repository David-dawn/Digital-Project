import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GalleryPage from './pages/GalleryPage'
import ProjectPage from './pages/ProjectPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
