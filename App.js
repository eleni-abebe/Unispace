import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bubbles from './components/Bubbles';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SchedulePage from './pages/SchedulePage';

function MainAppComponent() {
  return (
    <Router>
      <Bubbles />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </Router>
  );
}

export default MainAppComponent;
