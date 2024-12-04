import React from 'react';

const Contest = () => {
  return (
    <section id="contest" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Contests & Challenges</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Contest 1</h3>
            <p className="text-gray-600 mt-2">Ranked in the top 10 in a coding competition!</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Contest 2</h3>
            <p className="text-gray-600 mt-2">Awarded best solution for a machine learning challenge.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contest;
