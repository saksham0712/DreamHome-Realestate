import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import V3 from './components/V3';
import AboutA from './components/aboutA';
import AboutB from './components/aboutB';
import V6 from './components/V6';
import Canvas from './components/canvas';
import V1 from './components/V1';
import Navbar from './components/Navbar'; // <- import the styled navbar

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* push content below the fixed navbar */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/V1" element={<V1 />} />
          <Route path="/V3" element={<V3 />} />
          <Route path="/V6" element={<V6 />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/aboutA" element={<AboutA />} />
          <Route path="/aboutB" element={<AboutB />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
