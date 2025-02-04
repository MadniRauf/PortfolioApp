import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-yellow-300">ABDUL RAUF</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-200 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            I create beautiful and functional web applications with modern technologies
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-300 transition duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/MadniRauf"
            className="mt-4 bg-gray-800 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
