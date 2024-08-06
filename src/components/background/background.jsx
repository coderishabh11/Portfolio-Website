import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import './background.css';
import '../../websiteTheme.css';

const Background = ({ theme, id }) => {
  const [, setInit] = useState(false);

  useEffect(() => {
    // Initialize the particles engine and load the slim version of tsparticles
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Particle options that depend on the current theme
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: theme === 'light' ? '#F4FAFF' : '#212121',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "attract",
          },
          onHover: {
            enable: true,
            mode: 'repulse',
            distance: 140,
          },
        },
        modes: {
          attract: {
            distance: 250,
            duration: 5,
          },
          repulse: {
            distance: 80,
          },
        },
      },
      particles: {
        color: {
          value: "#fe531a",
        },
        links: {
          color: "#fe531a",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme] // Update particles when the theme changes
  );

  return <Particles id={id} className="particles-container" init={particlesLoaded} options={options} />;
};

export default Background;
