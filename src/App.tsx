import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { AudioProvider } from './context/AudioContext';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </AudioProvider>
    </ThemeProvider>
  );
};

export default App;
