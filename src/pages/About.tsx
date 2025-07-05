
import React from 'react';
import { CheckIcon, Star, Users, Code, Monitor, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      skills: ['React', 'Node.js', 'TypeScript'],
    },
    {
      name: 'Sarah Davis',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e3?w=400',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
    },
    {
      name: 'Mike Chen',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      skills: ['Python', 'React', 'AWS'],
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      skills: ['Agile', 'Scrum', 'Leadership'],
    },
  ];

  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to achieve their goals.',
    },
    {
      icon: Code,
      title: 'Innovation',
      description: 'We use cutting-edge technologies to create modern solutions.',
    },
    {
      icon: CheckIcon,
      title: 'Reliability',
      description: 'We deliver projects on time and exceed expectations.',
    },
  ];

  const achievements = [
    '100+ Successful Projects',
    '50+ Happy Clients',
    '5+ Years of Experience',
    'Award-Winning Team',
    '24/7 Support',
    'Global Reach',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            About <span className="text-gradient">DevStudio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            We are a passionate team of developers and designers creating exceptional digital experiences that drive business growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Founded in 2019, DevStudio began as a small team of passionate developers who believed in the power of exceptional digital experiences. Today, we've grown into a full-service web development agency that partners with businesses of all sizes.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                Our mission is simple: to create digital solutions that not only look amazing but also drive real business results. We combine creativity with technical expertise to deliver projects that exceed expectations.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckIcon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-scale-up">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center"
                alt="Team collaboration"
                className="rounded-2xl glass-card w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-8 text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue mb-6 group-hover:animate-float">
                  <value.icon className="h-8 w-8 text-dark-bg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 text-center group animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-neon-cyan mb-4">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work <span className="text-gradient">Together?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-glow inline-flex items-center">
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 inline-flex items-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
