import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import { cardVariants, containerVariants, itemVariants } from '../../utils/animation';
import { ABOUT_VALUES } from '../../utils/constants';

const VisionMissionValues: React.FC = () => {

  return (
    <motion.section
      className="px-4 md:px-12 lg:px-24 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="space-y-16">
        {/* Our Vision */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
            <FaEye className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Vision
          </h2>
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To be the global leader in digital transformation, empowering businesses worldwide with innovative technology solutions that drive sustainable growth, enhance operational efficiency, and create meaningful connections between brands and their customers in an increasingly digital world.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-green-600 rounded-full mb-8">
            <FaBullseye className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We deliver comprehensive end-to-end digital solutions including cutting-edge web and mobile applications, robust e-commerce platforms, and reliable BPO services. Our mission is to accelerate digital transformation for businesses of all sizes, providing scalable, secure, and user-centric solutions that drive measurable results and long-term success.
          </p>
        </motion.div>

        {/* Our Values */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mb-8">
              <FaHeart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ABOUT_VALUES.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisionMissionValues;
