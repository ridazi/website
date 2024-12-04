
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">RIDA ZIA</div>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="text-gray-800 hover:text-yellow-500">Home</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-yellow-500">About</a></li>
          <li><a href="#portfolio" className="text-gray-800 hover:text-yellow-500">Portfolio</a></li>
          <li><a href="#skills" className="text-gray-800 hover:text-yellow-500">Skills</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-yellow-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
