import React from 'react';
import { github, resumefile, resume, instagram, linkedin, twitter } from '../../assets'; // Importing social media icons

import './social.css';
import "../../websiteTheme.css";

// SocialLink component to display a list of social media links
const SocialLink = () => {
  return (
    <div className='social-links'>
      <ul className="list-unstyled">
        {/* LinkedIn link */}
        <li className="social-item card-background">
          <a href="https://www.linkedin.com/in/rishabh-sagar-1b0b74229/" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} className="icon-size" title='LinkedIn' alt="LinkedIn" />
          </a>
        </li>
        {/* Twitter link */}
        <li className="social-item card-background">
          <a href="https://x.com/Rishabh04112002?t=ih-aRVjwfpC5JVQeGwFn0w&s=08" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className="icon-size" title='Twitter' alt="Twitter" />
          </a>
        </li>
        {/* GitHub link */}
        <li className="social-item card-background">
          <a href="https://github.com/coderishabh11" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={github} className="icon-size" title='GitHub' alt="GitHub" />
          </a>
        </li>
        {/* Instagram link */}
        <li className="social-item card-background">
          <a href="https://www.instagram.com/rishabh_sagar_4/?utm_source=qr&igsh=MWxhdHR2eXE0bmRwZg%3D%3D" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className="icon-size" title='Instagram' alt="Instagram" />
          </a>
        </li>
        {/* Resume link */}
        <li className="social-item card-background">
          <a href={resumefile} className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={resume} className="icon-size" title='Resume' alt="Resume" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
