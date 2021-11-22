import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './pages/Home.js';
import Projects from './pages/Projects.js'
import Footer from './components/footer.js'
import Header from './components/header.js'


function App() {
  return (
    <Router>
      <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
      <Footer />
    </Router>
  );
}

export default App;
