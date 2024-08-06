import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './projects.css';
import { search, youtube, recipe } from '../../assets';
import { github } from '../../assets';
import '../../websiteTheme.css';

const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Handle scroll event to trigger animation when the projects section is in view
    if (!hasAnimated) {
      const handleScroll = () => {
        const element = document.getElementById('projects');
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
          setHasAnimated(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check animation status on initial load

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [hasAnimated]);

  return (
    <section id="projects" className="projects-section">
      <div className="proj-container py-5 heading-text">
        <header className="text-center mb-5">
          <motion.h1
            className="display-3 project-heading"
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0 }} // Fade-in effect for the heading
          >
            Projects
          </motion.h1>
        </header>

        <motion.div
          className="projects-grid"
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 1, // Stagger animation for each project card
                delayChildren: 1, // Delay before starting animation for children
              },
            },
          }}
        >
          {/* Project 1: RECIPIX (A Recipe Generator) */}
          <motion.div
            className="project-card card-background"
            variants={{
              hidden: { opacity: 0, x: -100 }, // Slide-in from left with fade-in
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth slide-in effect
          >
            <div className="upper_part">
              <img src={recipe} alt="Recipe Generator" className="project-pic" />
              <a href="https://github.com/coderishabh11/RECIPIX---A-Recipe-Generator" className="github-link card-background">
                <img src={github} alt="GitHub icon" className="github-icon" />
              </a>
            </div>
            <div className="lower_part">
              <h3 className='text-center font-weigth-bold'><b>RECIPIX (A Recipe Generator)</b></h3>
              <p>Created a Streamlit website that analyzes a provided photo to detect ingredients and then generates a recipe based on the detected ingredients using the Spoonacular API.</p>
            </div>
          </motion.div>

          {/* Project 2: YouTube Video Prediction */}
          <motion.div
            className="project-card card-background"
            variants={{
              hidden: { opacity: 0, x: -100 }, // Slide-in from left with fade-in
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="upper_part">
              <img src={youtube} alt="YouTube Video Prediction" className="project-pic" />
              <a href="https://github.com/coderishabh11/HARM---AI-powered-YouTube-Video-Classifier" className="github-link card-background">
                <img src={github} alt="GitHub icon" className="github-icon" />
              </a>
            </div>
            <div className="lower_part">
              <h3 className='text-center font-weigth-bold'><b>YouTube Video Prediction</b></h3>
              <p>Built a Streamlit website that classifies YouTube videos as educational or non-educational and, for educational videos, further categorizes them by subject based on their thumbnail and title.</p>
            </div>
          </motion.div>

          {/* Project 3: Multi-Attribute Search Algorithm Suite */}
          <motion.div
            className="project-card card-background"
            variants={{
              hidden: { opacity: 0, x: -100 }, // Slide-in from left with fade-in
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="upper_part">
              <img src={search} alt="Search Algorithm suite" className="project-pic" />
              <a href="https://github.com/coderishabh11/Search-Engine" className="github-link card-background">
                <img src={github} alt="GitHub icon" className="github-icon" />
              </a>
            </div>
            <div className="lower_part">
              <h3 className='text-center font-weigth-bold'><b>A Multi-Attribute Search Algorithm Suite</b></h3>
              <p>Developed an advanced search algorithm suite for a given dataset, experimenting with various algorithms and models to optimize search functionality.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
