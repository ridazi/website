
import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-green-100">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <img src="./project1.jpg" alt="Project 1" className="w-full hb-10 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
              <p className="text-gray-600 mt-2">This is my todo list that i have made by Nextjs </p>
            </div>
          </div>
          <div className="bg-blue-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <img src="resuma.png" alt="Project 2" className="w-full  object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
              <p className="text-gray-600 mt-2">This is my resuma i have made this by help of html css and java script 
                .</p>
            </div>
          </div>
          <div className="bg-blue-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <img src="project3.jpg
            " alt="Project 3" className="w-full h- object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Project 3</h3>
              <p className="text-gray-600 mt-2">This my project i hve fatch api and made a utility by pop up the product
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
