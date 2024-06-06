import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Map from './pages/Map';
import Timeline from './pages/Timeline';
import Tags from './pages/Tags';
import Blogs from './pages/Blogs';
import Header from './components/Header';
import './App.css'

function App() {
  
  return (
    <Router>
      <Header />
      <nav>
        <Link to="/">Map</Link>
        <Link to="/blogs">Articles/Blogs</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/tags">Tags</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/tags" element={<Tags />} />
      </Routes>
    </Router>
  );
}

export default App
