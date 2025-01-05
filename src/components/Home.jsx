import React from 'react';
import photo from '../assets/rajan.png'; // Import your image

const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
            <div className="flex flex-col items-center justify-center p-6 max-w-4xl text-center">
                {/* Image Section */}
                <div className="mb-6">
                    <img
                        src={photo} // Your image
                        alt="Rajan Sapkota"
                        className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain" // Increased size for all breakpoints
                    />
                </div>

                {/* Text Section */}
                <h1 className="text-3xl font-semibold mb-4">Rajan Sapkota</h1>
                <p className="text-xl mb-4">Full-Stack Developer & Passionate Learner</p>
                <p className="text-lg">
                    Hello! I’m Rajan Sapkota, a passionate developer with expertise in building modern web applications. I love creating
                    efficient and scalable solutions. In my free time, I enjoy exploring new technologies and learning about web design.
                </p>
            </div>
        </div>
    );
};

export default Home;