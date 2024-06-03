import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projets">Projects</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <section className='intro'>
        <h1>HI!</h1>
        <p>I'm <b>Jakub Łada</b> </p>
        <p>I am a student developing web applications and I want to become a DevOps engineer</p>
      </section>

      <secion className='quick'>
        <p>
          I enjoy programming and building web applications, but I still have a lot to learn. <br />
          My main skills are JavaScript and Python. I am also learning about things like Docker, Jenkins, and Kubernetes. <br />
          In my free time, I am learning how to build applications based on Node.js, React.js, and modern JavaScript frameworks.<br />
        </p>
      </secion>

      <footer>
        <p>Find me on</p>
        <a href="https://github.com/Jacbski?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub size={50} color="black" /> 
        </a>
      </footer>
    </div>
  );
}

export default App;