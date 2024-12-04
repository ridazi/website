
import React from 'react';
import Hero from './components/Hero'; // Ensure the component file name matches the import
import About from './components/About'; // Ensure the component file name matches the import
import Portfolio from './components/Portfolio'; // Ensure the component file name matches the import
import Skills from './components/Skills'; // Ensure the component file name matches the import
import Footer from './components/footer';

const Page = () => {  // The component name must start with an uppercase letter (Page instead of page)
  return (
    <main>
      <>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
       <Footer/>
      </>
    </main>
  );
}

export default Page; // Export the component with an uppercase name
