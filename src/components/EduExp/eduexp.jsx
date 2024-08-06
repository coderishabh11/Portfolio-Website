import React from 'react';
import { motion } from 'framer-motion';
import "./eduexp.css"; // Importing the CSS file for styling

// EduExp component for displaying Education and Experience sections
const EduExp = () => {
  return (
    <section id='edu' className="eduExp-container">
      <div className="container py-5">
        <div className="timeline-container">
          {/* Education Section */}
          <motion.div
            className="timeline-column"
            initial={{ opacity: 0, y: 50 }} // Initial state for animation
            whileInView={{ opacity: 1, y: 0 }} // Animation when the element is in view
            transition={{ duration: 1 }} // Duration of the animation
            viewport={{ once: true}} // Ensures animation runs only once when in view
          >
            <header className="heading-text timeline-header">
              <h1>EDUCATION</h1>
            </header>
            <motion.div
              className="main-timeline-5"
              initial={{ opacity: 0 }} // Initial state for animation
              whileInView={{ opacity: 1 }} // Animation when the element is in view
              transition={{ delay: 0.5, duration: 1 }} // Delay and duration for the animation
              viewport={{ once: true}} // Ensures animation runs only once when in view
            >
              {/* Education Item 1 */}
              <motion.div
                className="timeline-5 right-5"
                initial={{ opacity: 0, y: 20 }} // Initial state for animation
                whileInView={{ opacity: 1, y: 0 }} // Animation when the element is in view
                transition={{ delay: 0.5, duration: 0.5 }} // Delay and duration for the animation
                viewport={{ once: true}} // Ensures animation runs only once when in view
              >
                <div className="card card-background">
                  <div className="card-body p-4">
                    <h5 className='secondary-text'>High School</h5>
                    <span className="small text-muted"><i className="fas fa-clock me-1"></i>2019 - 2021</span>
                    <p className="mt-2 mb-1 exp-desc">Physics, Chemistry, Mathematics, Computer Science, English, Physical Education</p>
                    <p className='mb-0 exp-desc'><i>Percentage - 84.2%</i></p>
                  </div>
                </div>
              </motion.div>
              {/* Education Item 2 */}
              <motion.div
                className="timeline-5 right-5"
                initial={{ opacity: 0, y: 20 }} // Initial state for animation
                whileInView={{ opacity: 1, y: 0 }} // Animation when the element is in view
                transition={{ delay: 1, duration: 0.5 }} // Delay and duration for the animation
                viewport={{ once: true }}
              >
                <div className="card card-background">
                  <div className="card-body p-4">
                    <h5 className='secondary-text'>Bachelor's of Technology (IT & MI)</h5>
                    <span className="small text-muted"><i className="fas fa-clock me-1"></i>2021 - Present</span>
                    <p className="mt-2 mb-1 exp-desc">Pursuing B. Tech. in Information Technology and Mathematical Innovation from Cluster Innovation Centre, University of Delhi.</p>
                    <p className='mb-0 exp-desc'><i>GPA - 8.86</i></p>
                  </div>
                </div>
              </motion.div>
              {/* Add more education items here if needed */}
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="timeline-column"
            initial={{ opacity: 0, y: 50 }} // Initial state for animation
            whileInView={{ opacity: 1, y: 0 }} // Animation when the element is in view
            transition={{ delay: 1.5, duration: 1 }} // Delay and duration for the animation
            viewport={{ once: true }}
          >
            <header className="heading-text timeline-header">
              <h1>EXPERIENCE</h1>
            </header>
            <motion.div
              className="main-timeline-5"
              initial={{ opacity: 0 }} // Initial state for animation
              whileInView={{ opacity: 1 }} // Animation when the element is in view
              transition={{ delay: 2, duration: 1 }} // Delay and duration for the animation
              viewport={{ once: true }}
            >
              {/* Experience Item 1 */}
              <motion.div
                className="timeline-5 right-5"
                initial={{ opacity: 0, y: 20 }} // Initial state for animation
                whileInView={{ opacity: 1, y: 0 }} // Animation when the element is in view
                transition={{ delay: 2, duration: 0.5 }} // Delay and duration for the animation
                viewport={{ once: true }}
              >
                <div className="card card-background">
                  <div className="card-body p-4">
                    <h5 className='secondary-text'>Machine Learning Engineer Intern</h5>
                    <a href='https://deeplogicai.tech/' title='DeepLogic AI' alt='DeepLogic AI' style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}><span className="small text-muted"><i className="fas fa-clock me-1"></i>DeepLogic AI</span></a>
                    <span className="float-right small text-muted"><i className="fas fa-clock me-1">&emsp;(June - August, 2023)</i></span>
                    <p className="mt-2 mb-0 exp-desc">Developed a multi-attribute search algorithm suite to enhance search functionality for a given dataset. Experimented with various algorithms and models to optimize efficiency.</p>
                  </div>
                </div>
              </motion.div>
              {/* Experience Item 2 */}
              <motion.div
                className="timeline-5 right-5"
                initial={{ opacity: 0, y: 20 }} // Initial state for animation
                whileInView={{ opacity: 1, y: 0 }} // Animation when the element is in view
                transition={{ delay: 2.5, duration: 0.5 }} // Delay and duration for the animation
                viewport={{ once: true }}
              >
                <div className="card card-background">
                  <div className="card-body p-4">
                    <h5 className='secondary-text'>Machine Learning Engineer Intern</h5>
                    <a href='https://beyondexams.org/' title='Beyond Exams' alt='Beyond Exams' style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}><span className="small text-muted"><i className="fas fa-clock me-1"></i>Beyond Exams</span></a>
                    <span className="float-right small text-muted"><i className="fas fa-clock me-1">&emsp;(June - November, 2022)</i></span>
                    <p className="mt-2 mb-0 exp-desc">Built a Streamlit app that classifies YouTube videos into educational or non-educational categories. If educational, further categorized them into specific subjects like physics, chemistry, etc., using their thumbnails and titles.</p>
                  </div>
                </div>
              </motion.div>
              {/* Add more experience items here if needed */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EduExp;
