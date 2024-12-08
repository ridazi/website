
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-green-100">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* <h2 className="text-4xl font-semibold text-gray-800 mb-6">About Me</h2> */}
        <h2 className="text-5xl font-bold text-gray-800 mb-6 
                    font-poppins text-transparent 
                    bg-clip-text 
                    bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500
                    shadow-lg">About me</h2>
        <p className="text-lg text-black">
          Hi, I'm <h1 className='text-fuchsia-500'>RIDA ZIA</h1>, a passionate web developer with a love for building interactive and beautiful web applications.
          I specialize in front-end technologies like Nextjs , and I’m always eager to learn new skills to enhance my abilities.
        </p>
      </div>
    </section>
  );
};

export default About;
