import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileLinks from './templates/ProfileLinks';
import AboutMe from './templates/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileLinks />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;