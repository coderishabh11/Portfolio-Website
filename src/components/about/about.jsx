import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { html, css, js, nodejs, react, tensorflow, pytorch, scikit_learn, pandas, numpy, mongodb, sql, python, c, java, keras } from '../../assets/index.js';
import { profile } from '../../assets/index.js';
import "./about.css";

const Skill = () => {
  const skills = [
    {
      title: "Web Development",
      icons: [html, css, js, react, nodejs]
    },
    {
      title: "AI & ML",
      icons: [pandas, numpy, tensorflow, pytorch, scikit_learn, keras]
    },
    {
      title: "Database",
      icons: [sql, mongodb]
    },
    {
      title: "Languages",
      icons: [python, java, c]
    }
  ];

  return (
    <div className="container py-5">
      <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-weight-bold pb-4">Skills</h2>          
      </motion.div>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6" key={index}>
            <motion.div
              className="mb-3 p-4 rounded skill-block card-background"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.4 }}
              viewport={{ once: true}}
            >
              <span className="secondary-text h4 d-block text-center mb-3">{skill.title}</span>
              <div className="d-flex justify-content-around flex-wrap">
                {skill.icons.map((icon, i) => {
                  
                  const iconName = icon.split('/').pop().split('.')[0];
                  
                  return(
                    <div className="text-center" key={i}>
                      <img src={icon} title={iconName.charAt(0).toUpperCase() + iconName.slice(1)} alt={skill.title.toLowerCase()} className="skill-logo"/>
                    </div>
                )})}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const handleScroll = () => {
        const element = document.getElementById('about');
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
    <section id='about' className="container h-100 pt margin-left-0vw">
      <div className="row justify-content-center">
        <div className="col-md-10 mt-5 heading-text">
          <motion.h1
            className="about-heading text-center mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Know Who I'm
          </motion.h1>
          <div className="row ">
            <div className="col-md-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1, y: 0,
                    transition: { delay: 0.3, duration: 0.5 }
                  }
                }}
                viewport={{ once: true }}
              >
                <h1 className="display-4 font-weight-bold mb-4 ">
                  Hi all, I&#39;m <span className="secondary-text">Rishabh</span>
                </h1>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1, y: 0,
                    transition: { delay: 0.6, duration: 0.5 }
                  }
                }}
                viewport={{ once: true }}
              >
                <h2 className="font-weight-bold h3 mb-4">
                  I&#39;m a
                  <span className="heading-text"> AI Enthusiast</span> with a
                  passion for
                  <span className="heading-text"> cutting-edge technology</span>.
                </h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1, y: 0,
                    transition: { delay: 0.9, duration: 0.5 }
                  }
                }}
                viewport={{ once: true }}
              >
                <p className="lead mb-4">
                  I'm highly motivated programmer with 4 year of experience. I specialize in Python and 
                  proficient in other programming languages, bringing dedication and passion to every
                   project I work on. <br></br>
                  <a
                    href="#contact"
                    className="smooth-scroll custom-link secondary-text"
                  >
                    Send Me A Message&gt;
                    _
                  </a>
                </p>
              </motion.div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <motion.div
                className="profile-container"
                initial={{ opacity: 0, scale: 0.8 }} // Start scaled down
                whileInView={{ opacity: 1, scale: 1 }} // Animate to original size
                transition={{ duration: 1, delay: 0 }} // Zoom out effect with delay
                viewport={{ once: true }} // Ensure animation happens only once
              >
                <div className='profile-box'>
                  <img src={profile} alt="Rishabh Sagar" className="img-fluid profile_pic"/>
                </div>
              </motion.div>
            </div>
          </div>
          <Skill />
        </div>
      </div>
    </section>
  );
};

export default About;
