import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaLightbulb,
  FaAward,
  FaGlobe,
  FaHeart
} from 'react-icons/fa';
import { containerVariants, itemVariants } from '../../utils/animation';

const AboutHero: React.FC = () => {

  return (
    <motion.section
      className="px-4 md:px-12 lg:px-24 py-20 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 mt-10">
          About  <span className="text-sky-600">Comcares</span>
        </h1>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          We are a forward-thinking technology company dedicated to transforming businesses through innovative web solutions, mobile applications, and comprehensive BPO services.
        </p>
      </motion.div>

      {/* Responsive Floating illustration */}
      <motion.div
        className="mt-16 flex justify-center"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Central team icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FaUsers className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-sky-600 dark:text-sky-400 z-10" />
              </div>

              {/* Floating icons around the center */}
              <motion.div
                className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FaLightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center">
                  <FaGlobe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8"
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center">
                  <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
                animate={{ y: [7, -3, 7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                  <FaAward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
              </motion.div>

              {/* Connecting lines/dots */}
              <div className="absolute inset-0">
                <svg className="w-full h-full opacity-20" viewBox="0 0 320 320">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 80 80 Q 160 120 240 80 Q 200 160 240 240 Q 160 200 80 240 Q 120 160 80 80"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutHero;
