import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../utils/animation';

const SectionHero: React.FC = () => {

  return (
    <motion.section
      className="px-4 md:px-12 lg:px-24 py-20 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 mt-10">
          Our Services
        </h1>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Comcares Technologies offers a comprehensive suite of digital
          solutions including web development, mobile applications, UI/UX design,
          digital marketing, and BPO services. Our expert team is dedicated to
          helping your business grow, innovate, and succeed in today’s
          competitive landscape.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default SectionHero;