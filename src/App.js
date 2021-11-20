import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js'


function App() {
  return (
    <Router>
        <div className="row-12"> 
        <ul className="nav nav-tabs colorP" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
              <Link className="nav-link active" id="home-tab" to={'/'} aria-selected="true">About me</Link>
          </li>
          {/* <li className="nav-item dropdown" role="presentation">
              <Link className="nav-link dropdown-toggle disDropdown" id="profile-tab" to={'projects'} aria-expanded="false">Projects</Link>
          </li> */}
          </ul>
        </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>  
    </Router>
  );
}

export default App;
