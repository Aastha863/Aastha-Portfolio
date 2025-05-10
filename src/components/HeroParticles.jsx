import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

const HeroParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    // This loads the tsparticles package bundle
    await loadSlim(engine);
    await loadPolygonMaskPlugin(engine); 
  }, []);
    const particlesLoaded = useCallback(async (container) => {
    // console.log("Particles container loaded", container);
  }, []);
  return (
    <div className="absolute inset-0 transform-gpu">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        // options={{
        //   // Particle configuration will go here
        // }}
        options={{
          fpsLimit: 80,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "repulse" },
              // onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 160, duration: 1 },
            },
          },
          particles: {
            color: {
              value: ["#6366f1", "#fc4103", "#f7f709", "#30f908", "#ea677f"],
            }, // Indigo color that works well with white
            links: {
              color: {
                value: ["#6366f1", "#ea677f"],
              },
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 1000 },
              value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 6 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 translate-z-[-1px]"
      />
    </div>
  );
}

export default HeroParticles