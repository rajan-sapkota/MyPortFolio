import React, { useRef } from "react";
import Slider from "react-slick";
import yelpcampimg from "../assets/yelpcamp.png";
import nsaevents from "../assets/nsaevents.png";
import weatherapp from "../assets/weatherapp.png";

// Sample Project Data
const projects = [
  {
    id: 1,
    title: "Campground Project",
    description:
      "A website where you can add campgrounds in different places with the pictures and people can view it and add the review to it.",
    imageUrl: yelpcampimg,
    link: "https://yelpcampbyrajan.onrender.com",
  },
  {
    id: 2,
    title: "NSA Events",
    description:
      "A website where you can manage the events organized by NSA in the university. Here you can browse the events from the calendar and also review the past events.",
    imageUrl: nsaevents,
    link: "https://nsaevents.vercel.app/",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Look for the weather across the world.",
    imageUrl: weatherapp,
    link: "https://rajanweatherapp.netlify.app",
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center justify-between w-full h-[400px]">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-[200px] object-cover rounded-md"
    />
    <h3 className="text-lg font-semibold mt-4 text-gray-800 dark:text-white text-center">
      {project.title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
      {project.description}
    </p>
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition duration-300"
      >
        Visit Project
      </a>
    )}
  </div>
);

const Projects = React.forwardRef((props, ref) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      ref={ref}
      className="project-card bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center w-full h-screen"    >
      <div className="flex flex-col items-center justify-center h-full w-full gap-y-8">
        {/* Heading for "My Projects" */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          My Projects
        </h2>

        {/* Project Cards Slider */}
        <div className="relative w-full max-w-5xl">
          <Slider {...settings} ref={sliderRef} className="w-full">
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
});

export default Projects;