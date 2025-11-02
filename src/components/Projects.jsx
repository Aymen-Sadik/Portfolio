'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce website with user authentication, product management, and payment integration.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
  github: 'https://github.com/Aymen-Sadik',
      demo: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality and real-time updates.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Task+Manager',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'frontend',
  github: 'https://github.com/Aymen-Sadik',
      demo: 'https://example.com',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts for multiple cities.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Weather+App',
      technologies: ['JavaScript', 'API Integration', 'Chart.js'],
      category: 'frontend',
  github: 'https://github.com/Aymen-Sadik',
      demo: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A content management system for bloggers with rich text editing and comment functionality.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Blog+Platform',
      technologies: ['React', 'Express', 'PostgreSQL'],
      category: 'fullstack',
  github: 'https://github.com/Aymen-Sadik',
      demo: 'https://example.com',
      featured: true
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Portfolio',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      category: 'frontend',
  github: 'https://github.com/Aymen-Sadik',
      demo: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'API REST Service',
      description: 'A RESTful API service for managing user data with authentication and authorization.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=API+Service',
      technologies: ['Node.js', 'Express', 'JWT', 'MySQL'],
      category: 'backend',
  github: 'https://github.com/Aymen-Sadik',
      demo: 'https://example.com',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-purple-400">Projects</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 ${
                project.featured ? 'ring-2 ring-purple-400 ring-opacity-50' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}

              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}