import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../utils/animation';
import { ABOUT_STATS } from '../../utils/constants';

const AboutStats: React.FC = () => {
  // Render the statistics section with animations
  return (
    <motion.section
      className="px-4 md:px-12 lg:px-24 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {ABOUT_STATS.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutStats;
