
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">We Build</span>
              <br />
              <span className="text-gradient">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transform your ideas into powerful digital solutions with our expert web development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link to="/projects" className="btn-glow inline-flex items-center">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 inline-flex items-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right side - Animated SVG */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <svg
                width="500"
                height="500"
                viewBox="0 0 500 500"
                className="w-full h-auto"
              >
                {/* Background circles */}
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="none"
                  stroke="rgba(0, 245, 255, 0.1)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="150"
                  fill="none"
                  stroke="rgba(0, 128, 255, 0.1)"
                  strokeWidth="2"
                  className="animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
                <circle
                  cx="250"
                  cy="250"
                  r="100"
                  fill="none"
                  stroke="rgba(0, 245, 255, 0.2)"
                  strokeWidth="2"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />

                {/* Rotating outer ring */}
                <circle
                  cx="250"
                  cy="250"
                  r="220"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  strokeDasharray="20 10"
                  className="animate-spin"
                  style={{ animationDuration: '20s' }}
                />

                {/* Floating code symbols */}
                <g className="animate-float">
                  <text x="180" y="180" fill="#00f5ff" fontSize="24" fontFamily="monospace">&lt;/&gt;</text>
                </g>
                <g className="animate-float" style={{ animationDelay: '1s' }}>
                  <text x="320" y="200" fill="#0080ff" fontSize="20" fontFamily="monospace">{'{}'}</text>
                </g>
                <g className="animate-float" style={{ animationDelay: '2s' }}>
                  <text x="200" y="320" fill="#00f5ff" fontSize="18" fontFamily="monospace">( )</text>
                </g>
                <g className="animate-float" style={{ animationDelay: '1.5s' }}>
                  <text x="300" y="300" fill="#0080ff" fontSize="22" fontFamily="monospace">[ ]</text>
                </g>

                {/* Central glowing orb */}
                <circle
                  cx="250"
                  cy="250"
                  r="30"
                  fill="url(#gradient2)"
                  className="animate-pulse"
                />

                {/* Orbiting dots */}
                <circle
                  cx="350"
                  cy="250"
                  r="8"
                  fill="#00f5ff"
                  className="animate-spin"
                  style={{ 
                    transformOrigin: '250px 250px',
                    animationDuration: '8s'
                  }}
                />
                <circle
                  cx="150"
                  cy="250"
                  r="6"
                  fill="#0080ff"
                  className="animate-spin"
                  style={{ 
                    transformOrigin: '250px 250px',
                    animationDuration: '12s',
                    animationDirection: 'reverse'
                  }}
                />
                <circle
                  cx="250"
                  cy="150"
                  r="7"
                  fill="#00f5ff"
                  className="animate-spin"
                  style={{ 
                    transformOrigin: '250px 250px',
                    animationDuration: '10s'
                  }}
                />

                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="100%" stopColor="#0080ff" />
                  </linearGradient>
                  <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0080ff" stopOpacity="0.4" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
