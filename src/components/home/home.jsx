import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js'; // Importing Typed.js for animated text
import { black_arrow, white_arrow } from '../../assets/index.js'; // Importing arrow images
import { motion } from 'framer-motion'; // Importing Framer Motion for animations
import './home.css'; // Importing CSS for this component
import '../../websiteTheme.css'; // Importing global theme CSS

const Home = ({ theme, setTheme }) => {
  const typedTextRef = useRef(null); // Creating a reference for the typed text element

  useEffect(() => {
    const options = {
      strings: [
        'AI and ML Engineer',
        'Web Designer',
        'Web Developer'
      ],
      typeSpeed: 40, // Speed of typing
      backSpeed: 50, // Speed of deleting text
      loop: true, // Loop the animation
    };

    const typed = new Typed(typedTextRef.current, options); // Initializing Typed.js with options

    return () => {
      typed.destroy(); // Cleanup the Typed instance when the component unmounts
    };
  }, []);

  // Function to smoothly scroll to the "About" section when the down arrow is clicked
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='' className="container-fluid home-container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-12 text-center heading-text">
          <motion.h1 
            className="home-text display-4 font-weight-bold mb-4"
            initial={{ scale: 3 }} // Initial scale for animation
            animate={{ scale: 1 }} // Final scale for animation
            transition={{ duration: 0.5 }} // Duration of the scale animation
            whileInView={{ opacity: 1 }} // Ensure opacity is animated when in view
            viewport={{ once: true }} // Trigger the animation only once
          >
            Rishabh Sagar
          </motion.h1>
          <motion.div 
            className="h2 font-weight-semibold secondary-text"
            initial={{ scale: 3 }} // Initial scale for animation
            animate={{ scale: 1 }} // Final scale for animation
            transition={{ duration: 0.5, delay: 0.3 }} // Duration and delay of the scale animation
            whileInView={{ opacity: 1 }} // Ensure opacity is animated when in view
            viewport={{ once: true }} // Trigger the animation only once
          >
            <span className='secondary-text' ref={typedTextRef}></span> {/* Placeholder for typed text */}
          </motion.div>
        </div>
        <div className="down-arrow" onClick={scrollToAbout}>
          <img 
            src={theme === 'light' ? black_arrow : white_arrow} // Choose arrow based on theme
            alt="Down Arrow" 
            className="arrow" 
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
