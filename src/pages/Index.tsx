
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Monitor, Star, Users, CheckIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
    },
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic guidance to help your business succeed in the digital world.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      text: 'DevStudio transformed our online presence. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      text: 'Working with DevStudio was a game-changer. They delivered beyond our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'DesignCo',
      text: 'Professional, creative, and reliable. DevStudio is our go-to development partner.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">We Build</span>
              <br />
              <span className="text-gradient">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into powerful digital solutions with our expert web development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/projects" className="btn-glow">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center glass-card glass-card-hover p-6 animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-8 text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue mb-6 group-hover:animate-float">
                  <service.icon className="h-8 w-8 text-dark-bg" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-neon-cyan fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card glass-card-hover p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and bring your vision to life
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

export default Index;
