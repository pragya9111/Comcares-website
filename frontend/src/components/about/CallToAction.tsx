import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../utils/animation'
import Button from '../ui/Button'

const CallToAction: React.FC = () => {

  return (
    <motion.section
      className="px-4 md:px-12 lg:px-24 py-20 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Let's work together to bring your vision to life with innovative technology solutions tailored to your unique needs.
        </p>
        <Button
          customvariant="primary"
          size="large"
        // onClick={() => alert("Get Started Clicked")}
        >
          Get Started Today
        </Button>
      </motion.div>
    </motion.section>
  )
}

export default CallToAction