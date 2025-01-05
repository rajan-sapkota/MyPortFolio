import React from 'react';
import photo from '../assets/rajan.png'; // Import your image
import 'animate.css'; // Import animate.css for animations

const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
            <div className="flex flex-col items-center justify-center p-6 max-w-4xl text-center">
                {/* Image Section */}
                <div className="mb-6">
                    <img
                        src={photo}
                        alt="Rajan Sapkota"
                        className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                    />
                </div>

                {/* Text Section */}
                <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
                        Rajan Sapkota
                    </span>
                </h1>

                <p className="text-2xl font-medium mb-4 animate__animated animate__fadeIn animate__delay-2s">
                    Aspiring Computer Scientist & Full-Stack Developer
                </p>
                
                <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-3s">
                    I’m currently a Computer Science student at the University of Louisiana Monroe (ULM), on track to graduate in May 2025.
                    With a strong passion for software development, I specialize in creating modern, user-friendly web applications.
                </p>
                
                <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-4s">
                    Beyond coding, I thrive on exploring cutting-edge technologies, solving challenging problems, and collaborating on innovative projects. 
                    My dedication to learning and growth ensures that I stay ahead in this dynamic field.
                </p>
                
                <p className="text-lg animate__animated animate__fadeIn animate__delay-5s">
                    Let’s connect and build something extraordinary together!
                </p>
            </div>
        </div>
    );
};

export default Home;