
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
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

  return (
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
  );
};

export default TestimonialsSection;
