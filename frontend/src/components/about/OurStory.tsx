import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../utils/animation';

const OurStory: React.FC = () => {

  return (
    <motion.section
      className="px-4 md:px-12 lg:px-24 py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and business success, Comcares has evolved from a small team of passionate developers into a comprehensive digital solutions provider.
            </p>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our journey began with a simple belief: that every business, regardless of size, deserves access to world-class technology solutions. Today, we serve clients across diverse industries, from startups to enterprise-level organizations.
            </p>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We combine technical expertise with deep industry knowledge to deliver solutions that not only meet current needs but also scale for future growth. Our commitment to excellence and innovation continues to drive us forward.
            </p>
          </div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">Innovation</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Driven</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Client</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Focused</div>
                </div>
                <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">Quality</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Assured</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">Future</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Ready</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default OurStory;