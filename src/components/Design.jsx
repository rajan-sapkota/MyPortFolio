import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Design({ isDarkMode }) {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); // Load a slim version of tsparticles for smaller bundle size
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: isDarkMode ? "#ffffff" : "#000000", // White for dark mode, black for light mode
                        },
                        links: {
                            color: isDarkMode ? "#ffffff" : "#ff0000", // White for dark mode, red for light mode
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1.6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: isDarkMode ? { min: 2, max: 5 } : { min: 1, max: 3 }, // Smaller particles for light mode
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default Design;