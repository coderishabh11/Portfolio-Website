import React, { useEffect, useState } from 'react';
import AnimatedCursor from "react-animated-cursor"

// Importing different components for the app
import { SideNavbar } from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import EduExp from './components/EduExp/eduexp';
import Projects from './components/projects/projects';
import ContactMe from './components/contact/contact';
import SocialLink from './components/socialLink/social';
import Background from './components/background/background';
import ToggleTheme from './components/theme/theme';

const App = () => {
  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState('light');

  // useEffect hook to add or remove the 'dark-theme' class based on the theme state
  useEffect(() => {
    document.documentElement.className = theme === 'light' ? '' : 'dark-theme';
  }, [theme]);

  return (
    <>
      {/* Side navigation bar */}
      <SideNavbar />
      
      {/* Home component with theme toggle functionality */}
      <Home theme={theme} setTheme={setTheme} />
      
      {/* About section */}
      <About />
      
      {/* Education and Experience section */}
      <EduExp />
      
      {/* Projects section */}
      <Projects />
      
      {/* Animated cursor customization */}
      <AnimatedCursor
        color="grey"
        innerSize={12}
        outerSize={32}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        innerStyle={{
          backgroundColor:'#e5b8af'
        }}
        outerStyle={{
          backgroundColor: '#D8A9A3',
          mixBlendMode:'exclusion'
        }}
      />
      
      {/* Contact Me section with theme toggle functionality */}
      <ContactMe theme={theme} setTheme={setTheme} />
      
      {/* Social media links section */}
      <SocialLink />
      
      {/* Background animation or effects component */}
      <Background theme={theme} setTheme={setTheme} />
      
      {/* Theme toggle button */}
      <ToggleTheme theme={theme} setTheme={setTheme} />
    </>
  );
};

export default App;
