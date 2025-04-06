import React from "react";

function ProjectsPage() {
  const projects = [
    { title: "Project 1", src: "https://via.placeholder.com/600x400" },
    { title: "Project 2", src: "https://via.placeholder.com/600x400" },
    { title: "Project 3", src: "https://via.placeholder.com/600x400" },
    { title: "Project 4", src: "https://via.placeholder.com/600x400" },
    { title: "Project 5", src: "https://via.placeholder.com/600x400" },
    { title: "Project 6", src: "https://via.placeholder.com/600x400" },
  ];

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto text-center text-gray-800">
      <h1 className="text-3xl font-bold mb-6">WE DESIGN FOR PEOPLE</h1>

      <p className="mb-12 max-w-2xl mx-auto text-lg">
        Our approach to space planning and design comes from identifying needs,
        desires and dreams of every person, company or business. We use existing
        principles and concepts of design and adjust them to the local culture and
        everyday life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center text-right">
        {projects.map((project, index) => (
          <div key={index} className="shadow rounded overflow-hidden bg-white">
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
