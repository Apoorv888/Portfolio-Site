'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileDownload } from 'react-icons/fa';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Theme Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleTheme}
        className="fixed top-20 right-8 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </motion.button>

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
              Apoorva Chandanshive
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Data Engineer',
                2000,
                'Cloud Architect',
                2000,
                'ETL Pipeline Developer',
                2000,
                'Real-time Streaming Expert',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Specializing in building scalable data pipelines with <span className="font-semibold text-primary-600 dark:text-primary-400">AWS</span>, 
            <span className="font-semibold text-primary-600 dark:text-primary-400"> Kafka</span>, and 
            <span className="font-semibold text-primary-600 dark:text-primary-400"> PySpark</span>. 
            Transforming raw data into actionable insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-6 justify-center items-center mb-12"
          >
            <a
              href="https://drive.google.com/file/d/1uTN4OsXDqhADafMZhyudN4y7ZIIa9cKL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <FaFileDownload className="text-xl" />
              <span>Download Resume</span>
            </a>
            <a
              href="https://github.com/Apoorv888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/apoorva-chandanshive"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:apoorvachandanshive.sae.comp@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <FaEnvelope className="text-xl" />
              <span>Email</span>
            </a>
            <a
              href="tel:+919284028847"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <FaPhone className="text-xl" />
              <span>Call</span>
            </a>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '1.5+', label: 'Years Experience' },
              { number: '70%', label: 'Efficiency Gain' },
              { number: '99.9%', label: 'Data Accuracy' },
              { number: '500+', label: 'Concurrent Users' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-600 dark:bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
