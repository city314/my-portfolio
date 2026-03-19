import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 26,
          density: {
            enable: true,
            area: 1200,
          },
        },
        color: {
          value: ["#4f8cff", "#8b7cff", "#4fd4c4"],
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.45,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        opacity: {
          value: 0.18,
          random: {
            enable: true,
            minimumValue: 0.08,
          },
          animation: {
            enable: true,
            speed: 0.6,
            minimumValue: 0.06,
            sync: false,
          },
        },
        size: {
          value: { min: 10, max: 26 },
        },
        shape: {
          type: "circle",
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
          resize: true,
        },
      },
    }),
    [],
  );

  if (!init) {
    return null;
  }

  return (
    <div className="page-particles-layer">
      <Particles
        id="tsparticles"
        options={options}
        className="page-particles-canvas"
      />
    </div>
  );
}

export default ParticlesBackground;
