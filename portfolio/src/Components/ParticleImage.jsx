import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadAll } from "tsparticles-all";

export default function ParticleImage() {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          background: {
            color: {
              value: "#ffffff", // white background
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#000000", // black dots
            },
            links: {
              enable: true,
              distance: 120,
              color: "#000000", // black lines
              opacity: 0.4,
              width: 1,
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
      />
    </div>
  );
}
