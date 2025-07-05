
import React, { useState } from 'react';
import { Link, ArrowRight, Github, Monitor } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      description: 'A modern e-commerce platform built with React and Node.js, featuring secure payments and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600',
      description: 'A comprehensive healthcare management system with patient tracking and appointment scheduling.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
      description: 'Beautiful restaurant website with online ordering system and table reservations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600',
      description: 'Online learning platform with course management, progress tracking, and interactive content.',
      technologies: ['Angular', 'Django', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Real Estate App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
      description: 'Property search and listing application with map integration and virtual tours.',
      technologies: ['Flutter', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'design', label: 'UI/UX Design' },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Discover our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter.key
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg'
                    : 'glass-card glass-card-hover text-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card glass-card-hover group cursor-pointer animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-scale-up">
          <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-bg/80 text-white hover:bg-dark-bg transition-colors duration-300"
              >
                ×
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 text-neon-cyan border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.liveUrl}
                  className="btn-glow flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  View Live Site
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="px-6 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card glass-card-hover p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Project <span className="text-gradient">in Mind?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can bring your vision to life
            </p>
            <Link to="/contact" className="btn-glow">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
