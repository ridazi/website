import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-green-100">
    <div className="max-w-6xl mx-auto text-center px-4">
      {/* Skills Heading with Poppins font */}
      <h2 className="text-5xl font-bold text-gray-800 mb-6 
                    font-poppins text-transparent 
                    bg-clip-text 
                    bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500
                    shadow-lg">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Existing Skills */}
          <div className="bg-fuchsia-300 p-6 rounded-lg shadow-md hover:bg-yellow-100 transition">
            <h3 className="text-2xl font-semibold text-gray-800">JavaScript</h3>
            <p className="text-black mt-2">Experienced in ES6+, Node.js, and front-end JavaScript frameworks like React.</p>
          </div>
          
          <div className="bg-fuchsia-300  p-6 rounded-lg shadow-md hover:bg-yellow-100 transition">
            <h3 className="text-2xl font-semibold text-gray-800">React/NEXTJS</h3>
            <p className="text-black mt-2">Skilled in building dynamic web applications with React by nextjs frame work, Redux, and hooks.</p>
          </div>
          
          <div className="bg-fuchsia-300  p-6 rounded-lg shadow-md hover:bg-yellow-100 transition">
            <h3 className="text-2xl font-semibold text-gray-800">CSS</h3>
            <p className="text-black mt-2">Proficient in styling websites using CSS, Flexbox, Grid, and Tailwind CSS.</p>
          </div>

          {/* New Skills */}
          <div className="bg-fuchsia-300  p-6 rounded-lg shadow-md hover:bg-yellow-100 transition">
            <h3 className="text-2xl font-semibold text-gray-800">TypeScript</h3>
            <p className="text-black mt-2">Proficient in writing type-safe code with TypeScript, ensuring better code quality and maintainability.</p>
          </div>
          
          <div className="bg-fuchsia-300  p-6 rounded-lg shadow-md hover:bg-yellow-100 transition">
            <h3 className="text-2xl font-semibold text-gray-800">Python</h3>
            <p className="text-black mt-2">Experienced in developing backend services, automation scripts, and data analysis using Python.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

