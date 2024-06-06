import React from 'react';
import '../css/About.css';
import Bootstrap from '../svg/language/Bootstrap.svg';
import HTML5 from '../svg/language/HTML5.svg';
import JavaScript from '../svg/language/JavaScript.svg';
import MongoDB from '../svg/language/MongoDB.svg';
import NET from '../svg/language/NET.svg';
import Nodejs from '../svg/language/Node.svg';
import PostgresSQL from '../svg/language/PostgresSQL.svg';
import Python from '../svg/language/Python.svg';
import ReactLogo from '../svg/language/React.svg';
import Three from '../svg/language/Three.svg';
import CSS3 from '../svg/language/CSS3.svg';

import Docker from '../svg/programs/Docker.svg';
import Git from '../svg/programs/Git.svg';
import Jupyter from '../svg/programs/Jupyter.svg';
import Postman from '../svg/programs/Postman.svg';
import Vercel from '../svg/programs/Vercel.svg';
// import VSB from '../svg/programs/VSB.svg';
import VSP from '../svg/programs/VSP.svg';

function AppAbout() {
  const languages = [
    { name: 'Bootstrap', logo: Bootstrap },
    { name: 'HTML5', logo: HTML5 },
    { name: 'JavaScript', logo: JavaScript },
    { name: 'MongoDB', logo: MongoDB },
    { name: '.NET', logo: NET },
    { name: 'Node.js', logo: Nodejs },
    { name: 'PostgresSQL', logo: PostgresSQL },
    { name: 'Python', logo: Python },
    { name: 'React', logo: ReactLogo },
    { name: 'Three.js', logo: Three },
    { name: 'CSS3', logo: CSS3 },
  ];

  const programs =[
    { name: 'Docker', logo: Docker },
    { name: 'Git', logo: Git },
    { name: 'Jupyter', logo:Jupyter  },
    { name: 'Postman', logo:Postman  },
    { name: 'Vercel', logo: Vercel },
    // { name: 'VSB', logo: VSB },
    { name: 'Visual Studio', logo: VSP },

  ]

  return (
    <div className="About">

      <header className="App-header">
     
      </header>

      <section className='intro'>
        <h1>More about me </h1>
        <p>My name is <b>Jakub Łada</b> from Gdańsk, Poland </p>
        <p>I am a third-year student at the Polish-Japanese Academy of Information Technology in Gdańsk</p>
        <p>In addition to programming, I also train for triathlons in my free time, play basketball, occasionally play computer games, and go snowboarding in the winter</p>
      </section>

      

      <section>
        cos tam sie wpisze
      </section>

      <section>
        <h4>Programing Language I use</h4>
        <div className='languages'>
          {languages.map((language, index) =>
            <div key={index} className='language'>
              <img src={language.logo} alt={`${language.name} logo`} />
              <p>{language.name}</p>
              </div>
          )}
        </div>
      </section>

      <section>
        <h4>Programs I use</h4>
        <div className='programs'>
          {programs.map((program, index) =>
            <div key={index} className='program'> 
              <img src={program.logo} alt={`${program.name} program`} />
              <p>{program.name}</p>
              </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default AppAbout;