import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="https://github.com" className="text-gray-400 hover:text-white mx-2">GitHub</a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-white mx-2">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

