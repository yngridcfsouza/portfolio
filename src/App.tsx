import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route index element={<ContactPage />} />
        <Route index element={<ProjectsPage />} />
        <Route index element={<ResumePage />} />
      </Route>
    </Routes>
  );
};

export default App;
