import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-gradient-to-r from-green-100 to-teal-500 text-white flex items-center justify-center text-center">
      <div className="max-w-4xl px-6">
        
        <h1 className="text-5xl font-bold mb-4 text-blue-700 font-serif">Welcome to My Portfolio</h1>
        <p className="text-2xl mb-6  text-green-700">I'm a passionate web developer, eager to create innovative and user-friendly digital experiences.</p>
        <a href="#about" className="inline-block bg-blue-500 text-gray-800 py-2 px-6 rounded-lg hover:bg-yellow-600 transition">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
