import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import WelcomeScreen from "./components/WelcomeScreen";
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Projects from './pages/Projects.jsx';
import './index.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();
  
  const handleWelcomeClick = () => {
    setShowWelcome(false);
    navigate('/home');
  };

  // Si todavía estamos en la pantalla de bienvenida, mostramos solo eso
  if (showWelcome) {
    return <WelcomeScreen onClick={handleWelcomeClick} />;
  }

  // Una vez pasada la pantalla de bienvenida, mostramos las rutas
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/portfolio/:profileId" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;