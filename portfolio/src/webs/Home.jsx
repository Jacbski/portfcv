import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../css/Home.css"

const Home = () => {
  return (
    <>
      <section className='intro'>
        <h1>HI!</h1>
        <p>I'm <b>Jakub Łada</b> </p>
        <p>I am a student developing web applications, and I want to become a back-end developer</p>
      </section>

      <section className='quick'>
        <p>
          I enjoy programming and building web applications, but I still have a lot to learn. <br />
          My main skills are JavaScript and Python. I am also learning about things like .Net, Docker, Jenkins, and Kubernetes. <br />
          In my free time, I am learning how to build applications based on .Net, Node.js, React.js, and modern C#/JavaScript frameworks.<br />
        </p>
      </section>

      <section className='findmeon'>
        <p>Find me on</p>
        <div className='logos'>
          <div className='logo'>
            <a href="https://github.com/Jacbski?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare size={50} color="black" />
            </a>
          </div>
          <div className='logo'>
            <a href="https://www.linkedin.com/in/jakub-łada-3b67b230b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} color="black" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
