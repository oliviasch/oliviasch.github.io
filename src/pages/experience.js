import React, { useState } from 'react';

// import css designs
import '../App.css';
import '../design/panel.css'; 

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const cards = [
    { title: 'Personal Portfolio', 
        stack: 'JavaScript, React, Node', 
        info: 'you are here :)' },
    { title: 'Satellite Visualizer', 
        stack: 'Java, Spring Boot, Cesium, MongoDB', 
        info: `In collaboration with aerospace engineers and CACI, I lead a team of 22 
        programmers in developing backend architecture for satellite position tracking. 
        I managed MongoDB databases and integrated Spring Boot with Orekit to perform TLE-based 
        calculations for determining satellite location, visibility windows, and orbital 
        propagation. I implemented precise coordinate conversions, robust edge case handling, 
        and a graphical scheduler using SGP4 and OpenGL. My work also included optimizing API 
        endpoints for frontend integration and ensuring scalable, maintainable data models 
        tailored for real-time aerospace operations.`,
        repo: 'https://github.com/ClaireW004/satellite-visualizer' },
    { title: 'Storiza', 
        stack: 'Python, Flask', 
        info: 'etc' },
    { title: 'Microlift', 
        stack: 'JavaScript, ExpoGo', 
        info: `I collaborated with a team of five to connect women and gender minorities with 
        financial opportunities by linking them to potential lenders and investors. I developed 
        the JavaScript frontend, implementing a Tinder-inspired UI/UX design to improve user 
        engagement and the mobile experience. Additionally, I integrated the backend with the 
        frontend and designed flexible account schemas to support multiple account types, 
        ensuring seamless data flow and personalized user experiences across the platform.`,
        repo: 'https://github.com/Lyra126/Microlift' },
    { title: 'Bloomwell', 
        stack: 'Flutter, JavaScript, Node', 
        info: 'etc' }, 
    { title: 'Pawsitive Minds', 
        stack: 'Flutter, Python, MongoDB', 
        info: 'etc',
        repo: 'https://github.com/tyleraudino/PawsitiveMinds' }, 
    { title: 'Memory Manager', 
        stack: 'C++', 
        info: `I implemented a custom memory management system using mmap and munmap 
        for dynamic memory allocation, incorporating best- and worst-fit strategies with
        robust tracking to prevent memory leaks and optimize utilization. Additionally, I designed 
        memory management utilities, including bitmap encoding and memory block dumping with POSIX
        I/O for persistent storage, enhancing memory usage and system performance.` },
    { title: 'Atlas Climate Analyzer', 
        stack: 'C++, JavaScript', 
        info: `With two collaborators, I developed a robust backend system to efficiently manage 
        and analyze large-scale CO2 emissions data and integrated a web-based frontend using HTML, 
        CSS, JavaScript, and WebAssembly to enhance user interaction. We implemented and optimized
         Splay Trees and Red-Black Trees for efficient data handling, enabling fast insertions 
         and searches, and conducted performance benchmarking through level-order traversal while 
         managing time complexity for various operations.`,
        repo: 'https://github.com/oliviasch/Atlas' },
    { title: 'Minesweeper', 
        stack: 'C++, SFML', 
        info: 'etc' },
  ];

  const handleClick = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="page-wrapper">
      <div className="App-header">
        <h1>
          <code>projects</code> and <code>contributions</code>
        </h1>
        <div className="scroll-panel">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${expandedIndex === index ? 'expanded' : ''}`}
              onClick={() => handleClick(index)}
            >
              <h3><b>{card.title}</b></h3>
              <p className="more-info"><i>{card.stack}</i></p>
              {expandedIndex === index && (
                <>
                  <p className="more-info">{card.info}</p>
                  
                  <p className="more-info">
                    <a
                      className="Link"
                      href={card.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Experience;
