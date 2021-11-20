import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
          <li className="nav-item dropdown" role="presentation">
              <Link className="nav-link dropdown-toggle disDropdown" id="profile-tab" to={'/Projects'} aria-expanded="false">Projects</Link>
          </li>
          <ul class="dropdown-menu" id="dropdown-menu">
            <li><button class="nav-link"><a href="#project1">Weather Tracker</a></button></li>
            <li><button class="nav-link"><a href="#project2">CSS CheatSheet</a></button></li>
            <li><button class="nav-link"><a href="#project3">Stock Discussion Tracker</a></button></li>
            <li><button class="nav-link"><a href="#project4">Teach Thru Talk</a></button></li>
          </ul>
          </ul>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
    </Router>
  );
}

export default App;
