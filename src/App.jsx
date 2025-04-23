import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import V3 from './components/V3';
import AboutA from './components/aboutA';
import AboutB from './components/aboutB';
import V6 from './components/V6';
import Canvas from './components/canvas';

function App() {
  return (
    <>
    <Router>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/V3">V3</Link> 
        <Link to="/V6">V6</Link> 
        <Link to="/aboutA">aboutA</Link> 
        <Link to="/aboutB">aboutB</Link> 
        <Link to="/canvas">Canvas</Link> 
        {/* <Link to="/contact">Contact</Link> */}
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/V3" element={<V3 />} />
        <Route path="/V6" element={<V6 />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/aboutA" element={<AboutA />} />
        <Route path="/aboutB" element={<AboutB />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
