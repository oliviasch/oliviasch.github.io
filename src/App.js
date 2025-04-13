import React from 'react';
import logo from './logo.svg';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// stylesheets
import './App.css';
import './index.css';

// pages
import Experience from './pages/experience';
import URSP from './pages/ursp';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="App">
        {/* navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                <Nav.Link as={Link} to="/ursp">URSP</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* pages */}
        <Routes>
          <Route path="/" element={
            <div>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  no clue what to put here <code>src/App.js</code>
                </p>
                <a
                  className="Link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          } />
          <Route path="/experience" element={<Experience />} />
          <Route path="/ursp" element={<URSP />} />
          <Route path = "/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
