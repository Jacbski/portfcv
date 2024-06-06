import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import About from './webs/About';
import Projects from './webs/Projects';
import Home from './webs/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar expand="lg" className="Navbar">
            <Container>
              <Navbar.Brand as={Link} to="/" style={{color:'white',fontSize:"30px"}}>JŁ</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <div className="App-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>

        <footer>
          <div className="footer-content">
            <p>Made by: Jakub Łada</p>
            <div>
              <a href="https://github.com/Jacbski?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jakub-łada-3b67b230b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
